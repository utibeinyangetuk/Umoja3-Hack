"reach 0.1";
//Outcome array
const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3); 

//This computes the winner of the game
const winner = (hand1, hand2, hand3, hand4) => {

  if (hand1 + hand2 == hand3  && hand1 + hand2 != hand4){
    return A_WINS;
  }
  else if (hand1 + hand2 != hand3 && hand1 + hand2 == hand4){
    return B_WINS;
  }
  else  return DRAW;

};

// Makes the required payment to the winner
const payWinner = (outcome, wager, Alice, Bob) => {
  if(outcome == A_WINS) {
    transfer(2*wager).to(Alice);
    each([Alice, Bob], () => {
      interact.seeOutcome(outcome);
    });
  }
  else if (outcome == B_WINS){
    transfer(2*wager).to(Bob);
    each([Alice, Bob], () => {
      interact.seeOutcome(outcome);
    });
    
  }
  else {
    each([Alice, Bob], () => {
      interact.seeOutcome(outcome)
    });
    transfer(wager).to(Alice);
    transfer(wager).to(Bob);

  };
}


//Player abilities
const Player = {
  ...hasRandom,
  getFinger: Fun([], UInt),
  getPrediction : Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun([], Null),
  seeOpponentMove: Fun([UInt, UInt], Null)
};


export const main = Reach.App(() => {
//Alice interface
  const Alice = Participant('Alice', {
    ...Player,
    wager: UInt, 
    deadline: UInt,
   
  });
//Bob interface
  const Bob   = Participant('Bob', {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  init();

  const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
    });
  };
//Alice wager and the deadline for the timeout
  Alice.only(() => {
    const wager = declassify(interact.wager) * 1000000;
    const deadline = declassify(interact.deadline);
  });
  Alice.publish(wager, deadline)
    .pay(wager);
  commit();

 

//Bob accepting or rejecting the wager
  Bob.only(() => {
    interact.acceptWager(wager);
  });
  Bob.pay(wager)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));


//While loop that loops until we have a winner
  var [hand1, hand2, hand3, hand4] = [0,0,0,0];
  invariant( balance() == 2 * wager);

  while ((hand1 + hand2 == hand3) && (hand1 + hand2 == hand4)) {
    commit();


    Alice.only(() => {
      const _handAlice = interact.getFinger();
      const _predictionAlice = interact.getPrediction();
      
      const [_handcommit, _handSalt] = makeCommitment(interact, _handAlice);
      const [_predictcommit, _predictsalt] = makeCommitment(interact, _predictionAlice);
      
      const commitAliceFinger = declassify(_handcommit);
      const commitAlicePredict = declassify(_predictcommit);


    });
    Alice.publish(commitAliceFinger, commitAlicePredict)
      .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
    commit();

    unknowable(Bob, Alice(_handAlice, _predictionAlice, _handSalt, _predictsalt));
    Bob.only(() => {
      const handBob = declassify(interact.getFinger());
      const predictionBob = declassify(interact.getPrediction());
      
    });
    Bob.publish(handBob, predictionBob)
      .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
    commit();

    Alice.only(() => {
      const handAlice = declassify(_handAlice); 
      const handSalt = declassify(_handSalt);
      const predictionAlice = declassify(_predictionAlice);
      const predictSalt = declassify(_predictsalt);
    });
    Alice.publish(handAlice, handSalt, predictionAlice, predictSalt)
      .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
    checkCommitment(commitAliceFinger, handSalt, handAlice);
    checkCommitment(commitAlicePredict, predictSalt, predictionAlice);
    
 
    Alice.interact.seeOpponentMove(handBob, predictionBob);
    Bob.interact.seeOpponentMove(handAlice, predictionAlice);
    [hand1, hand2, hand3, hand4] = [handAlice, handBob, predictionAlice, predictionBob];
    
    continue;
    

  }
  const outcome = winner(hand1, hand2, hand3, hand4);

//Uses the outcome to pay the winner
  payWinner(outcome,wager, Alice, Bob);

 

  
  commit();

 
});