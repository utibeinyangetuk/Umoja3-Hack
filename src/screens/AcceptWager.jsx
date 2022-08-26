import './index.css'

export function AcceptWager({ wager, decline, accept }){

  return(
    <div className='section'>
      <h5>Do you accept wager of {wager} ALG ?</h5>
      <button className='button' onClick={() => accept()}>Accept</button>
      <button className='button' onClick={() => decline()}>Decline</button>
    </div>
  )
}