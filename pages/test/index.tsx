import React, { useRef, useEffect, useState } from "react";

const index = () => {
  const waveformRef = useRef(null);
  let [isPlaying, setIsPlaying] = useState(true);
  let [waveSurfer, setWaveSurfer] = useState(null) as any;

  useEffect(() => {
    if (typeof self != "undefined" || typeof self != undefined) {
      const WaveSurfer = require("wavesurfer.js");
      if (waveformRef.current) {
        setWaveSurfer(
          WaveSurfer.create({
            container: waveformRef.current,
            waveColor: "violet",
          })
        );
      }
    }
  }, []);

  useEffect(() => {
    if (waveSurfer) {
      waveSurfer.load("/static/mf.mp3");
      waveSurfer.on("ready", function () {
        waveSurfer.play();
      });
    }
    return () => {
      waveSurfer?.destroy();
    };
  }, [waveSurfer]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    waveSurfer.playPause();
  };

  return (
    <div style={{ marginTop: "15rem" }}>
      <div ref={waveformRef} />
      <button onClick={() => togglePlayPause()}>
        {isPlaying ? "pause" : "play"}
      </button>
    </div>
  );
};

export default index;
