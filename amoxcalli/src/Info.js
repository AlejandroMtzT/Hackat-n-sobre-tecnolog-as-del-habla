import React,{Component} from 'react';
import Audio from './components/Audio.js';

export class Info extends Component{
    render(){
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div>
                    <center><h2>Información</h2></center>
                    <p>Proyecto de rescate cultural</p>
                </div>
            </div>
        );
    }
}