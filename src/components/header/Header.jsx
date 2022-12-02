import React, { useState } from "react"
import "./header.css"

const Header = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header>
        <div className='container flexSB'>
          <nav className='flexSB'>
            <div className='logo'>
              <img src='./images/logo.png' alt='' />
            </div>
            {/*<ul className='flexSB'>*/}
            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li>
                <a href='/'>Basty bet</a>
              </li>
              <li>
                <a href='/'>Serialdar</a>
              </li>
              <li>
                <a href='/'>Filmder</a>
              </li>
              <li>
                <a href='/'>Better</a>
              </li>
              <li>
                <a href='/'>Bagalar</a>
              </li>
              <li>
                <a href='/'>Contact</a>
              </li>
            </ul>
            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav>
          <div className='account flexSB'>
            <button>Qazir zhazylu</button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
