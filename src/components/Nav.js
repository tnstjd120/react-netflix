import React, { useState, useEffect } from 'react'
import './Nav.css'

const Nav = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setShow(true) : setShow(false)
    })

    return () => {
      window.removeEventListener('scroll', () => {})
    }
  }, [])

  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      <a href="/" className="nav__logo">
        <img
          alt="Neflix logo"
          src="//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
        />
      </a>

      <a href="#" className="nav__avatar">
        <img alt="Neflix avatar" src={'images/netflix_avatar_icon.jpeg'} />
      </a>
    </nav>
  )
}

export default Nav
