import './App.css';
import { loadStdlib } from '@reach-sh/stdlib';
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
import * as backend from './reach/build/index.main.mjs'
import { useState } from 'react';
import { views, Loader } from './utils/';
import { ConnectAccount, PasteContractInfo, SelectRole, AcceptWager, WaitForAttacher, GetFinger, GetPrediction } from './screens';


const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback( { providerEnv: 'TestNet', MyAlgoConnect } ));

function App() {
  const [ account, setAccount ] = useState({})
  const [ view, setView ] = useState(views.CONNECT_ACCOUNT)
  const [ contractInfo, setContractInfo ] = useState()
  const [ resolver, setResolver ] = useState({ resolve: ()=> {}})
  const [ outcome, setOutcome ] = useState(0)
  const [ wager, setWager ] = useState(0)
  const [ finger, setFinger ] = useState(undefined)
  const [ prediction, setPrediction ] = useState(undefined)
  const [ opponentFinger, setOpponentFinger ] = useState(undefined)
  const [ opponentPrediction, setOpponentPrediction ] = useState(undefined)

  const reachFunctions = {
    connect: async (secret, mnemonic = false) => {
      let result = ""
      try {
        const account = mnemonic ? await reach.newAccountFromMnemonic(secret) : await reach.getDefaultAccount();
        setAccount(account);
        setView(views.DEPLOY_OR_ATTACH);
        result = 'success';
      } catch (error) {
        result = 'failed';
      }
      return result;
    },

    deploy: async (wager) => {
      const contract = account.contract(backend);
      backend.Alice(contract, { ...Alice, wager, deadline: 100});
      setView(views.DEPLOYING); 
      const ctcInfo = JSON.stringify(await contract.getInfo())
       
      setContractInfo(ctcInfo);
      setView(views.WAIT_FOR_ATTACHER)
    },

    attach: (contractInfo) => { 
      const contract = account.contract(backend, JSON.parse(contractInfo));
      backend.Bob(contract, Bob)
      setView(views.ATTACHING)
    }
  }

  //Participant Objects
  const Common = {
    random: () => reach.hasRandom.random(),

    getFinger: () => {
      return new Promise(resolve => {
        setResolver({
          resolve: (finger) => {
            setFinger(finger)
            setView(views.DEPLOYING)
            resolve(finger)
          }
        })
        setView(views.GET_FINGER)
      })
    },

    getPrediction: () => {
      return new Promise(resolve => {
        setResolver({
          resolve: (prediction) => {
            setPrediction(prediction)
            setView(views.WAIT_FOR_OPPONENT)
            resolve(prediction)
          }
        })
        setView(views.GET_PREDICTION)
      })
    },

    seeOutcome: (outcomeHex) => {
      const outcome = parseInt(outcomeHex)
      setOutcome(outcome)
      setView(views.SEE_OUTCOME)
    },

    seeOpponentMove: (fingerHex, predictionHex) => {
      const f = parseInt(fingerHex)
      const p = parseInt(predictionHex)
      setOpponentFinger(f)
      setOpponentPrediction(p)
    },

    informTimeout: () => setView(views.TIME_OUT)
  }

  const Alice = {
    ...Common
  }

  const Bob = {
    ...Common,

    acceptWager: (wagerHex) => {
      const wager = parseFloat(wagerHex)
      setWager(wager/1000000)
      setView(views.ACCEPT_TERMS)
      return new Promise(resolve => {
        setResolver({
          resolve: () => {
            setView(views.WAIT_FOR_OPPONENT)
            resolve()
          }
        })
      })
    }
  }
  
  return (
    <div className="App">
      <div className='top'>
        <h1>MORRA</h1>
      </div>
      <header className="App-header">
        {
          view === views.CONNECT_ACCOUNT && 
          <ConnectAccount connect={reachFunctions.connect}/>
        }

        {
          view === views.DEPLOY_OR_ATTACH &&
          <SelectRole deploy={reachFunctions.deploy} attach={() => setView(views.PASTE_CONTRACT_INFO)}/>
        }

        {
          (view === views.DEPLOYING || view === views.ATTACHING) &&
          <Loader />
        }

        {
          view === views.PASTE_CONTRACT_INFO &&
          <PasteContractInfo attach={reachFunctions.attach}/>
        }

        {
          view === views.WAIT_FOR_ATTACHER &&
          <WaitForAttacher info={contractInfo}/>
        }

        {
          view === views.ACCEPT_TERMS &&
          <AcceptWager wager={wager} accept={() => resolver.resolve()} decline={() => setView(views.DEPLOY_OR_ATTACH)}/>
        }

        {
          view === views.WAIT_FOR_OPPONENT &&
          <div className='section'>
            {
              finger !== undefined &&
              <p>You played hand {finger} and predicted {prediction}</p>
            }
            <Loader />
            <p>Waiting for opponent...</p>
          </div>
        }

        {
          view === views.GET_FINGER &&
          <GetFinger 
            playFinger={ f => resolver.resolve(f)}
            opponentFinger={opponentFinger}
            opponentPrediction={opponentPrediction}
            finger={finger}
            prediction={prediction}
          />
        }

        {
          view === views.GET_PREDICTION &&
          <GetPrediction 
            play={p => resolver.resolve(p)}
          />
        }

        {
          view === views.SEE_OUTCOME && 
          <div className='section'>
            {
              outcome === 0 && <h2>Bob Wins</h2>
            }
            {
              outcome === 1 && <h2>Nobody Wins</h2>
            }
            {
              outcome === 2 && <h2>Alice Wins</h2>
            }
            <hr style={{width: '100%'}}/>
            <p>You played hand {finger} and predicted {prediction}</p>
            <p>Your opponent played hand {opponentFinger} and predicted {opponentPrediction}</p>
          </div>
        }
      </header>
    </div>
  );
}

export default App;
