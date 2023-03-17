import { useState } from 'react'
import './App.css'
import hero from '../public/images/hero-mobile.jpg'
import heroDesktop from '../public/images/hero-desktop.jpg'
import logo from '../public/images/logo.svg'
import icon from '../public/images/icon-arrow.svg'
import error from '../public/images/icon-error.svg'
import bg from '../public/images/bg-pattern-desktop.svg'
import './validate'
import submitData from './validate'

function App() {

  return (
    <div className="App">
     <header>
      <img className='logo' src={logo} alt=""></img>
      </header>
      <picture>
        <source media="(max-width: 63.75rem)" srcSet={hero}></source>
        <source media="(min-width: 63.75rem)" srcSet={heroDesktop}></source>
        <img src={heroDesktop} alt="Dark haired woman standing in front of a plant"></img>
      </picture>
      <main>
       <h1><span>We're</span> coming soon</h1>
       <p>Hello fellow shoppers! We're currently building our new fashion store. 
          Add your email below to stay up-to-date with announcements and our launch deals.</p>
      <form>
        <input type='email' id='email' placeholder='Email Address' 
        aria-required="true" required>
        </input>
        <img className="error-hidden" srcSet={error} alt=""></img>
        <button type='submit' className='icon' aria-label='submit email address' onClick={submitData}>
        <img src={icon} alt="arrow icon"></img></button>
      </form>
      <p className='error-hidden' role="alert">Please provide a valid email</p>
     </main>
    </div>
  )
}

export default App
