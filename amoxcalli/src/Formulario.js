import React,{Component} from 'react';
import Audio from './components/Audio.js';
import {useState, useEffect} from 'react';

export class Formulario extends Component{

    constructor(props){
      super(props)

      this.state={
        titulo: 'Introduzca aquí el título de su contribución.',
        fuente : 'Introduzca aquí la fuente de su contribución.',
        texto: 'Introduzca aquí el texto de su contribución, ya sea como texto o como un audio en la parte inferior.',
        }
    }

    changeHandler = (e) => {
      this.setState({[e.target.name]: e.target.value});
    }

    submitHandler = (e) => {

    }



    render(){
        const {titulo, fuente, texto} = this.state;
        return (
      <div className="Formulario">
        <header className="Formulario-header">
          <form action = "" method="post" onSubmit={this.submitHandler}>
            <center><label for="Título">Título</label></center>
            <center><textarea  cols="33" rows="5" type="text" name="titulo" value={titulo} onChange={this.changeHandler}/></center>
            <br></br>
            <br />
            <center><label for="Fuente">Fuente</label></center>
            <center><textarea  cols="20" rows="3" type="text" name="fuente" value={fuente} onChange={this.changeHandler}/></center>
            <br />
            <center><label for = 'Texto'>Texto</label></center>
            <center><textarea  cols="50" rows="10" type="text" name="texto" value={texto} onChange={this.changeHandler}/></center>
            <br />
            <center><Audio/></center>
          </form>
        </header>
      </div>
      )

    }
}
