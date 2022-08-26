import { useState } from 'react'
import './index.css'

export function SelectRole({deploy, attach}){
  const [ deployer, setDeployer ] = useState(false)
  const [ wager, setWager ] = useState(0)

  return(
    <div className='section flex-column'>
      {
        deployer === true &&
        <>
          <label>Set Wager</label>
          <input
              style={{height: '30px', margin: '15px', textAlign: 'center'}}
              type={'number'}
              value={wager}
              onChange={e => setWager(e.target.value)}
          />
          <button className='button' onClick={() => deploy(parseFloat(wager))}>Deploy</button>
        </>
      }
      {
        deployer === false && 
        <>
          <button className='button' onClick={() => setDeployer(true)}>Deploy Contract</button>
          <hr />
          <button className='button' onClick={() => attach()}>Attach to existing contract</button>
        </>
      }
    </div>
  )
}