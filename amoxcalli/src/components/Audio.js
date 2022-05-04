import {useState} from 'react';
import { saveAs } from 'file-saver';
import '../App.css';
import React, {useEffect} from 'react';


function Audio (){

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

  const [soundFile, setSoundFile] = useState({});
  var FileSaver = require('file-saver');

  const handleChangeSound = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setSoundFile(file);
    setData('hola');
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data);
        console.log(data);
      }
    )
  }

  const guardarAudio = async () => {
    FileSaver.saveAs(soundFile);
  }


  return(
    <div className="App">
      <p></p>
      <input type="file" id="sound" accept="sound/*" onChange={handleChangeSound}></input>
      <p></p>
      <button onClick={guardarAudio}>GUARDAR</button>
      <center><textarea  cols="50" rows="10" type="text" name="texto" value={JSON.stringify(data)}/></center>

    </div>
  );
}

export default Audio;
