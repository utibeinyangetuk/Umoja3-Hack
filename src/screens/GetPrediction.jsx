import { useState } from "react"


export function GetPrediction({ play }){
  const [ value, setValue ] = useState(0)
  return(
    <div className="section flex-column">
      <label>Pick your prediction between 1 and 10</label>
          <input
              style={{height: '30px', margin: '15px', textAlign: 'center'}}
              type={'number'}
              value={value}
              onChange={e => setValue(e.target.value)}
          />
          <button 
            className='button' 
            disabled={parseInt(value) > 10 || parseInt(value) < 1}
            onClick={() => play(parseFloat(value))}
          >Submit Hand</button>
    </div>
  )
}