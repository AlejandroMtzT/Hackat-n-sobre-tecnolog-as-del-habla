import React,{Component} from 'react';
import Audio from './components/Audio.js';

export class Formulario extends Component{
    render(){
        return (
      <div className="Formulario">
        <header className="Formulario-header">

          <form action = "" method="post" />
            <center><label for="Título">Título</label></center>
            <center><textarea cols="30" rows="5" type="text" id="Título" name="Título" placeholder="Introduce el título de tu contribución" /></center>
            <br></br>
            <br />
            <center><label for="Fuente">Fuente</label></center>
            <center><textarea cols="30" rows="5" type="Fuente" id="Fuente" name="Fuente" placeholder="Introduce la fuente" /></center>
            <br />
            <center><label for="Subtítulo">Subtítulo</label></center>
            <center><textarea cols="30" rows="5" type="Subtítulo" id="Subtítulo" name="Subtítuloo" placeholder="Introduce el Subtítulo" /></center>
            <br />
            <center><label for = 'Texto'>Texto</label></center>
            <center><textarea cols="50" rows="10" id="Texto" placeholder="Introduce el texto de tu contribución" name="Texto"></textarea> </center>
            <br />
            <center><Audio/></center>

        </header>
      </div>
      )

    }
}