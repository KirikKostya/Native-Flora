import React from 'react'
import { NavLink } from 'react-router-dom'
import '../PreviewStyles/BackButton.css'

export default function BackButton() {
  return (
    <div className='BackButton'>
        <NavLink className='NavLink' to='/'>&#11013;</NavLink>  
    </div>
    )
    
}
