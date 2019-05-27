import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import './Navegacion.css'

const Navegacion = (props) => {
  return (
    <nav className="navegacion">
      <NavLink to={'/acerca'} activeClassName="activo"> Acerca </NavLink>
      <NavLink to={'/productos'} activeClassName="activo"> Productos </NavLink>
      <NavLink to={'/contacto'} activeClassName="activo"> Contacto </NavLink>
    </nav>
  )
}

export default Navegacion
