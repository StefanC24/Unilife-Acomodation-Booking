import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {

  const path = process.env.PUBLIC_URL;

  return (
    <div className='navbar'>
      <Link to='/'>
        <img className='logo' src={path + '/assets/Unilife-logo.png'} alt='Unilife logo'/>
      </Link>
      <div className='shortlist-contact_us'>
          <p className='shortlist'>Shortlist</p>
          <p className='contact_us'>Contact Us</p>
      </div>
    </div>
  )
}
