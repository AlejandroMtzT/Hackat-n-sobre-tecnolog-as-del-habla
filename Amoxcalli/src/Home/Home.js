import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Amoxcalli</h1>
          <p>Proyecto de rescate cultural</p>
          <form>
            <Button onClick={() => history.push('/Entradas')}>Crear nueva entrada</Button>
          </form>
        </div>
      </div>
    );
  }
}
