import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <Link to={'/'}>
        <img src="/img/logo.png" alt="logo imagen" />
      </Link>
    </header>
  )
}

export default Header
