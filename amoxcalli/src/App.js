import './App.css';
import {Inicio} from './Inicio';
import {Formulario} from './Formulario';
import {Info} from './Info';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import React, {useState, useEffect} from 'react'

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data);
        console.log(data);
      }
    )
  }, [])

  return (
    <BrowserRouter>
    <div className="App">

        <h2 className="d-flex justify-content-center m-3">
          Amoxcalli
        </h2>
          <nav className='navbar navbar-expand-sm bg-light navbar-dark'>
            <ul className='navbar-nav'>
              <li className='nav-item- m-1'>
                <NavLink className="btn btn-light btn-outline-primary" to="/inicio">
                  Inicio
                </NavLink>
              </li>
              <li className='nav-item- m-1'>
                <NavLink className="btn btn-light btn-outline-primary" to="/formulario">
                  Crear nueva entrada
                </NavLink>
              </li>
              <li className='nav-item- m-1'>
                <NavLink className="btn btn-light btn-outline-primary" to="/info">
                 Información
                </NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/inicio"  element={<Inicio/>}/>
            <Route path='/formulario' element={<Formulario/>}/>
            <Route path='/info' element={<Info/>}/>
          </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
