import React from 'react';
import ReactDOM from 'react-dom';
import Boton from './components/Boton.js'
import logo from './logo.svg';
import './App.css';
import Formulario from './components/Formulario.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Link } from "react-router-dom";


export default class Inicio extends React.Component{

  render(){
    return (
      <>
      <Router>
        <Switch>
          <Route exact path="/formulario" component={Formulario} />
          <Redirect to="/" />
        </Switch>
      </Router>

      <div className="App">
        <header className="App-header">
        <center><img src={require('./img/Nuestra_img.jpg')} width="350"/></center>
            <h1> Amoxcalli </h1>
        <nav>
            <ul class="nav">
                <li>
                    <a href="">Inicio</a>
                    <section>
                        <p>
                            Hola
                        </p>
                    </section>
                </li>
                <li><a href="">Leyendas</a>
                    <ul>
                        <li><a href="">Leyenda 1</a></li>
                        <li><a href="">Leyenda 2</a></li>
                        <li><a href="">Leyenda 2</a></li>
                            <ul>
                                <li><a href="">Submenu1</a></li>
                                <li><a href="">Submenu2</a></li>
                                <li><a href="">Submenu3</a></li>
                                <li><a href="">Submenu4</a></li>
                            </ul>
                    </ul>
                </li>
                <li><a href="">Cuentos</a>
                    <ul>
                        <li><a href="">Cuento 1</a></li>
                        <li><a href="">Cuento 2</a></li>
                        <li><a href="">Cuento 3</a></li>
                        <li><a href="">Cuento 4</a></li>
                    </ul>
                </li>

                <li><a href="">Historia</a>
                    <ul>
                        <li><a href="">Historia 1</a></li>
                        <li><a href="">Historia 2</a></li>
                        <li><a href="">Historia 3</a></li>
                        <li><a href="">Historia 4</a></li>
                    </ul>
                </li>
                <li><a href="">Biología</a>
                    <ul>
                        <li><a href="">Biologia 1</a></li>
                        <li><a href="">Bio 2</a></li>
                    </ul>
                </li>
                <li><a href="">Contacto</a></li>
            </ul>
        </nav>

        {<Boton />}

      </header>
      </div>
      </>
    );
  }
}
