import React, {useState} from 'react'
import Main from './MainFieldComponents/Main.js'
import Router from './Router.js'
import Router_2 from './Router_2.js'


export default function App() {
  
  const [step, setStep] = useState(1)
  
  return (
    <div>
      {
        (step == 0)?<Router setStep = {setStep}/>:<Main />
      }
    </div>
  )
}
