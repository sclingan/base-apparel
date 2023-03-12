import { useState } from 'react'
import './App.css'
import hero from '../public/images/hero-mobile.jpg'
import heroDesktop from '../public/images/hero-desktop.jpg'
import logo from '../public/images/logo.svg'
import icon from '../public/images/icon-arrow.svg'

function App() {

  return (
    <div className="App">
      {/* move header to another component? */}
     <header>
      <img className='logo' src={logo} alt=""></img>
      </header>
      <picture>
        <source media="(min-width: 20rem)" srcSet={hero}></source>
        <source media="(max-width: 20rem)" srcSet={heroDesktop}></source>
        <img src={heroDesktop} alt=""></img>
      </picture>
      <main>
       <h1><span>We're</span> coming soon</h1>
       <p>Hello fellow shoppers! We're currently building our new fashion store. 
          Add your email below to stay up-to-date with announcements and our launch deals.</p>
      <form>
        <input type='email' placeholder='Email Address'>
        </input>
        <button type='submit' className='icon' aria-describedby='submit email address'><img src={icon} alt=""></img></button>
      </form>
     </main>
    </div>
  )
}

export default App
