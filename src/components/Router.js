import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import Navegacion from './Navegacion/Navegacion';
import Productos from './Productos/Productos';
import Acerca from './Acerca/Acerca';
import Contacto from './Contacto/Contacto';
import Error from './Error/Error';
import SingleProducto from './SingleProducto/SingleProducto';
import infoProductos from '../datos/datos.json';


class Router extends React.Component {

  state = {
    productos : []
  }

  componentWillMount(){
    this.setState({
      productos : infoProductos
    })
  }

  render () {
    return (
      <BrowserRouter>

        <Header />
        <Navegacion />

        <Switch>
          <Route exact path="/" render={() => (
            <Productos productos={this.state.productos} />
          )} />
          <Route exact path="/acerca" component={Acerca} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/productos" render={() => (
            <Productos productos={this.state.productos} />
          )} />
          <Route exact path="/producto/:productoId" render={(props) => {
            let idProducto = props.location.pathname.replace('/producto/','');
            return (
              <SingleProducto
                producto = {this.state.productos[idProducto]}
              />
            )
          }} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router;
