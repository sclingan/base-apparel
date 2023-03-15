import { useState } from 'react'
import './App.css'
import hero from '../public/images/hero-mobile.jpg'
import heroDesktop from '../public/images/hero-desktop.jpg'
import logo from '../public/images/logo.svg'
import icon from '../public/images/icon-arrow.svg'
import error from '../public/images/icon-error.svg'
import './validate'
import submitData from './validate'

function App() {

  return (
    <div className="App">
      {/* move header to another component? */}
     <header>
      <img className='logo' src={logo} alt=""></img>
      </header>
      <picture>
        <source media="(max-width: 37.5rem)" srcSet={hero}></source>
        <source media="(min-width: 37.5rem)" srcSet={heroDesktop}></source>
        <img src={heroDesktop} alt=""></img>
      </picture>
      <main>
       <h1><span>We're</span> coming soon</h1>
       <p>Hello fellow shoppers! We're currently building our new fashion store. 
          Add your email below to stay up-to-date with announcements and our launch deals.</p>
      <form>
        <input type='email' id='email' placeholder='Email Address' required>
        </input>
        <img className="error-hidden" srcSet={error}></img>
        <button type='submit' className='icon' aria-label='submit email address' onClick={submitData}>
        <img src={icon} alt=""></img></button>
      </form>
      <p className='error-hidden'>Please provide a valid email</p>
     </main>
    </div>
  )
}

export default App
