import React, { useState, useEffect } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useNavigate, Link } from 'react-router-dom'

import './Nav.css'

const Nav = () => {
  const [show, setShow] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setShow(true) : setShow(false)
    })

    return () => {
      window.removeEventListener('scroll', () => {})
    }
  }, [])

  const handleClick = () => {
    setSearchOpen(searchOpen ? false : true)
  }

  const handleChange = (e) => {
    setSearchValue(e.target.value)
    e.target.value ? navigate(`/search?q=${e.target.value}`) : navigate('/')
  }

  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      <Link to="/" className="nav__logo">
        <img
          alt="Neflix logo"
          src="//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
        />
      </Link>

      <div className="nav__right">
        <div className={`nav__search ${searchOpen && 'active'}`}>
          <button onClick={handleClick}>
            <FiSearch />
          </button>

          <input
            type="text"
            placeholder="제목, 사람, 장르"
            value={searchValue}
            onChange={handleChange}
          />
        </div>

        <a href="#" className="nav__avatar">
          <img
            alt="Neflix avatar"
            src="https://tnstjd120.github.io/react-netflix/images/netflix_avatar_icon.jpeg"
          />
        </a>
      </div>
    </nav>
  )
}

export default Nav
