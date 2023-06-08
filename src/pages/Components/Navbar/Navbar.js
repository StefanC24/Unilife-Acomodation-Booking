import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar'>
        <img className='logo' src='./assets/Unilife-logo.png' alt='Unilife logo'/>
        <div className='shortlist-contact_us'>
            <p className='shortlist'>Shortlist</p>
            <p className='contact_us'>Contact Us</p>
        </div>
    </div>
  )
}
