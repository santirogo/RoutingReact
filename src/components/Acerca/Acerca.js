import React from 'react';
import PropTypes from 'prop-types';
import './Acerca.css';

class Acerca extends React.Component {
  render () {
    return (
      <div className="contenedor-nosotros">
        <div className="imagen">
          <img src="/img/camisa_1.png" alt="imagen nosotros" />
        </div>
        <div className="contenido">
          <h2>Sobre nosotros</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            fringilla vel odio vel varius. Nunc viverra tincidunt elit, vel
            lacinia lacus lacinia at. Aenean sed tempor ex. Ut pretium egestas
            facilisis. Ut ultrices nec risus aliquam hendrerit. Maecenas gravida
            eros purus, non lobortis erat varius quis. Mauris vel odio eros. Sed
            luctus malesuada mauris tristique tincidunt. </p>
        </div>
      </div>

    )
  }
}

export default Acerca;
