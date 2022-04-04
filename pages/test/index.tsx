import React, { useRef, useEffect } from "react";

const index = () => {
  const waveformRef = useRef(null);
  useEffect(() => {
    if (typeof self != "undefined" || typeof self != undefined) {
      const WaveSurfer = require("wavesurfer.js");
      if (waveformRef.current) {
        const wavesurfer = WaveSurfer.create({
          container: waveformRef.current,
        });
        wavesurfer.load(
          "https://freesound.org/data/previews/462/462807_8386274-lq.mp3"
        );
        wavesurfer.on("ready", function () {
          wavesurfer.play();
        });
      }
    }
  }, []);

  return (
    <div style={{ marginTop: "15rem" }}>
      <h1>Hello World</h1>
      <div ref={waveformRef} />
    </div>
  );
};

export default index;
