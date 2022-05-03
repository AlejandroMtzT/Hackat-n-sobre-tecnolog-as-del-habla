import {useState} from 'react';
import { saveAs } from 'file-saver';
import '../App.css';

function Audio (){

  const [soundFile, setSoundFile] = useState({});
  var FileSaver = require('file-saver');

  const handleChangeSound = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setSoundFile(file);
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

    </div>
  );
}

export default Audio;
