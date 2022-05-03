import React from 'react';
import ReactDOM from 'react-dom';
import Formulario from './Formulario.js';
import {Redirect} from 'react-router-dom';


export default class Boton extends React.Component {

  onSubmit = () => {
     console.log('hola');
      return  <Redirect  to="/formulario" />
    }

    render() {
      return (
        <form>
          <button onClick={this.onSubmit}>AGREGAR</button>
        </form>
      )
    }
}
