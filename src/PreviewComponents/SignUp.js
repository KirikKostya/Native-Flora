import React, { useEffect } from 'react'
import BackButton from './BackButton.js'
import '../PreviewStyles/SignUp.css'
import { NavLink } from 'react-router-dom'

export default function SignUp() {
  let PasswordInput;
  useEffect(()=>{
     PasswordInput = document.querySelector('#PasswordInput');
  }, [])
  
  const showPassword = ()=>{
    if(PasswordInput.type == 'password'){
      PasswordInput.type = 'text'
    } else {
      PasswordInput.type = 'password'
    }
  }
  return (
    <div className='ContainerForSignUp'>
        <BackButton /> 
        {/* <div className='BackGround'>
            <div className='LeftPart'/>
            <div className='Center' />
            <div className='RightPart' />
        </div> */}
        <div className='SignUp'>
            <h1>Sign Up</h1>
            <div className='ForInputs'>
                
                <input className='Input' placeholder='Login'/>
                <div className='PasswordField'>
                  <input id='PasswordInput' className='Input' type='password' placeholder='Password'/>
                  <button onClick={showPassword} className='EyeBtn'>&#128065;&#65039;</button>
                </div>
                <div className='PasswordField'>
                  <input id='PasswordInput' className='Input' type='password' placeholder='Please, repeat your password'/>
                  <button onClick={showPassword} className='EyeBtn'>&#128065;&#65039;</button>
                </div>

            </div>
            <button className='SignUpBTN'>Create Account</button>
        </div>
    </div>
  )
}
