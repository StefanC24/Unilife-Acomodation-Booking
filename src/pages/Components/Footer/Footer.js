import React from 'react'
import './Footer.css'
export default function Footer() {

    const path = process.env.PUBLIC_URL;

  return (
    <div className='footer'>
        <div className='contact-container'>
            <h2 className='footer-header'>Keep in touch</h2>
            <p>Curious about new offerings? Sign up for our weekly newsletter and stay informed.</p>
            <input className='email-input' type='email' placeholder='Your email'/>
        </div>
        <div className='social-media-links'>
            <h2 className='footer-header'>Let's Socialize</h2>
            <a className='link' href='facebook.com' >
                <img className='link-icon' src= {path +'/assets/facebook-icon.png'} alt='facebook icon'></img>
                Facebook
            </a>
            <a className='link' href='twitter.com'>
                <img className='link-icon' src={path +'/assets/twitter.png'} alt='twitter icon'></img>
                Twitter
            </a>
            <a className='link' href='instagram.com' >
                <img className='link-icon' src={path +'/assets/instagram-icon.png'} alt='instagram icon'></img>
                Instagram
            </a>
        </div>
    </div>
  )
}
