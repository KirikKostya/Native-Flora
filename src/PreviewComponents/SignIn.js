import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import '../PreviewStyles/SignIn.css'
import BackButton from './BackButton';

export default function SignIn({setStep}) {
    let PasswordInput;
    let LoginInput;
  
    useEffect(()=>{
      PasswordInput = document.querySelector('#PasswordInput');
      LoginInput = document.querySelector('#Login');
    }, [])
  
  const showPassword = ()=>{
    if(PasswordInput.type == 'password'){
      PasswordInput.type = 'text'
    } else {
      PasswordInput.type = 'password'
    }
  }

  const SignIn = (e) =>{
    e.preventDefault()
    
    const UsersOfLocalStorage = Object.values(localStorage);
    console.log(UsersOfLocalStorage)
    console.log(PasswordInput, LoginInput)
        for(let user of UsersOfLocalStorage){
            
          const parseUser = JSON.parse(user);

            if(parseUser.login == LoginInput.value 
                &&
               parseUser.password == PasswordInput.value) {
                setStep(1);

            } else {
                console.log('Try again!')
            }
        }
    }

  return (
    <div className='ContainerForSignIn'>
        <BackButton />
        <div className='SignIn'>
            <h1>Sign In</h1>

            <div className='ForInputs'>
                
                <input id='Login' className='Input' placeholder='Login'/>
                <div className='PasswordField'>
                  <input id='PasswordInput' className='Input' type='password' placeholder='Password'/>
                  <button onClick={showPassword} className='EyeBtn'>&#128065;&#65039;</button>
                </div>

            </div>

            <button className='SignIpBTN' onClick={SignIn}>SignIn</button>
            <p>First time with us? <NavLink className='NavLink' to='/SignUp'>SignUp</NavLink> now.</p>
        </div>
    </div>
  )
}
