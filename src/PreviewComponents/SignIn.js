import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import '../PreviewStyles/SignIn.css'
import BackButton from './BackButton';

export default function SignIn() {
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
    <div className='ContainerForSignIn'>
        <BackButton />
        <div className='SignIn'>
            <h1>Sign In</h1>

            <div className='ForInputs'>
                
                <input className='Input' placeholder='Login'/>
                <div className='PasswordField'>
                  <input id='PasswordInput' className='Input' type='password' placeholder='Password'/>
                  <button onClick={showPassword} className='EyeBtn'>&#128065;&#65039;</button>
                </div>

            </div>

            <button className='SignIpBTN'>Create Account</button>
            <p>First time with us? <NavLink className='NavLink' to='/SignUp'>SignUp</NavLink> now.</p>
        </div>
    </div>
  )
}
