import React,{Component} from 'react';
import './Inicio.css';
export class Inicio extends Component{
    render(){
        return(
        <div className="Inicio">
        <header className="Inicio-header">

        <nav>
            <ul class="nav">
                <li>
                    <a href="">Inicio</a>
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
        
        

      </header>
      </div>
        )
    }
}