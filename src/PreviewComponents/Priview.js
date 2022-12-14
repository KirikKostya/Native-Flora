import React from 'react'
import '../PreviewStyles/Preview.css'
import LOGO from '../PHOTOS/NativeFloraLOGO.png'
import { NavLink } from 'react-router-dom'

export default function Preview() {
  return (

    <div className='MainContainer'>
      <div className='ContainerForGreeting'>
          <div className='ContainerForLOGO'><div className='LOGO' /></div>
          <div className='LeftText'>
              <div className='NavBar'>
                <NavLink className='NavLink' to='/Info'>Info</NavLink>
                <NavLink className='NavLink' to='/AboutUs'>About Us</NavLink>
                <NavLink className='NavLink' to='/OurServices'>Our Services</NavLink>
                <NavLink className='NavLink' to='/Contact'>Contact</NavLink>
              </div>

              <div className='PriviewText'>
                
                  <h1 className='Welcome'>Welcome</h1>
                  
                  <p className='Info'>
                    to the interactive portal for assembling your own bouquets with a large assortment of different flowers! 
                    Here you can choose a bouquet based on your preferences and tastes. More information about our website can be found at <NavLink className='NavLink' to='/'>Info</NavLink>. 
                  </p>

                  <p className='GoodLuck'>Happy building and good luck!</p>
              </div>

              <div className='Autorizate-BTNS'>
                <NavLink className='BTN' to='/SignUp'>SignUp</NavLink>
                <NavLink className='BTN' to='/SignIn'>SignIn</NavLink>
              </div>
          </div>

      </div>
    </div>
  )
}
