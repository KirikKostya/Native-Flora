import React, { useEffect } from 'react'
import BackButton from './BackButton.js'
import '../PreviewStyles/SignUp.css'

export default function SignUp() {
  let LoginInput;
  let PasswordInput;
  let SecondPasswordInput;
  useEffect(()=>{
     LoginInput = document.querySelector('#LoginInput'); 
     PasswordInput = document.querySelector('#PasswordInput');
     SecondPasswordInput = document.querySelector('#SecondPasswordInput');
  }, [])
  
  const showPassword = ()=>{
    if(PasswordInput.type == 'password'){
      PasswordInput.type = 'text'
    } else {
      PasswordInput.type = 'password'
    }
  }

  const createAccount = ()=>{
    if(LoginInput.value == '' && PasswordInput.value == ''){
      console.log('sorry');
    } else if(PasswordInput.value != SecondPasswordInput.value){
      console.log('sorry bro');
    } else {
      let User = {
        login: LoginInput.value,
        password: PasswordInput.value,
      }

      localStorage.setItem(`${User.login}`, JSON.stringify(User))

      LoginInput.value = '';
      PasswordInput.value = '';
      SecondPasswordInput.value = '';
      
    }
  } 
  return (
    <div className='ContainerForSignUp'>
        <BackButton /> 
        
        <div className='SignUp'>
            <h1>Sign Up</h1>
            <div className='ForInputs'>
                
                <input id='LoginInput' className='Input' placeholder='Login'/>
                <div className='PasswordField'>
                  <input id='PasswordInput' className='Input' type='password' placeholder='Password'/>
                  <button onClick={showPassword} className='EyeBtn'>&#128065;&#65039;</button>
                </div>
                <div className='PasswordField'>
                  <input id='SecondPasswordInput' className='Input' type='password' placeholder='Please, repeat your password'/>
                </div>

            </div>
            <button className='SignUpBTN' onClick={createAccount}>Create Account</button>
        </div>
    </div>
  )
}
