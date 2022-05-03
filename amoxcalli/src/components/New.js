import React from "react";
import { useState } from "react";
import { Recorder } from "react-voice-recorder";
import "./styles.css";

const New = () => {
  const { audioURL, setAudioURL } = useState(null);
  const { audioDetails, setAudioDetails } = useState({
    url: null,
    blob: null,
    chunks: null,
    duration: {
      h: 0,
      m: 0,
      s: 0
    }
  });

  const handleAudioStop = (data) => {
    console.log(data);
    setAudioDetails(data);
    //console.log(data);
  };
  const handleAudioUpload = (file) => {
    console.log(file);
  };
  const handleRest = () => {
    const reset = {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0
      }
    };
    setAudioDetails(reset);
  };
  return (
    <div className="App">
      <Recorder
        record={false}
        title={"New recording"}
        hideHeader
        audioURL={audioDetails?.url}
        showUIAudio
        handleAudioStop={(data) => handleAudioStop(data)}
        handleAudioUpload={(data) => handleAudioUpload(data)}
        handleRest={() => handleRest()}
      />
    </div>
  );
};

export default New;
