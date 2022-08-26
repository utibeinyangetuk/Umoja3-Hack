import { useState } from "react"


export function GetFinger({ playFinger, opponentFinger, opponentPrediction, finger, prediction}){
  const [ value, setValue ] = useState(0)
  return(
    <div className="section flex-column">
      {
        opponentFinger !== undefined &&
        <>
          <p>In the previous round you played hand {finger} and predicted {prediction}</p>
          <p>Your opponent played hand {opponentFinger} and predicted {opponentPrediction}</p>
          <hr style={{width: '100%'}}/>
          <h4>Play Again</h4>
        </>
      }
      <label>Pick a number between 1 and 5</label>
          <input
              min='1'
              max='5'
              style={{height: '30px', margin: '15px', textAlign: 'center'}}
              type={'number'}
              value={value}
              onChange={e => setValue(e.target.value)}
          />
          <button 
            className='button'
            disabled={parseInt(value) > 5 || parseInt(value) < 1} 
            onClick={() => {playFinger(parseInt(value))}}>Submit Hand</button>
    </div>
  )
}