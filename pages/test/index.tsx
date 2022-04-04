import React, { useRef, useEffect, useState } from "react";

const tracks = [
  {
    id: 0,
    title: "Brahms: St Anthony Chorale - Theme, Two Pianos Op.56b",
    url: "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3",
  },
  {
    id: 1,
    title: "Franz Schubert's Ständchen - Voice (Clarinet) & Piano",
    url: "https://www.mfiles.co.uk/mp3-downloads/franz-schubert-standchen-serenade.mp3",
  },
  {
    id: 2,
    title: "Franz Schubert",
    url: "/static/ot.mp3",
  },
];

const index = () => {
  const waveformRef = useRef(null);
  const [selectedTrack, setSelectedTrack] = useState(null) as any;
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const wavesurfer = useRef(null) as any;

  useEffect(() => {
    if (typeof self != "undefined" || typeof self != undefined) {
      const WaveSurfer = require("wavesurfer.js");
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "violet",
        progressColor: "purple",
        cursorColor: "navy",
        barWidth: 2,
        barHeight: 1,
      });
    }
  }, []);

  useEffect(() => {
    // load wavesurfer audio
    if (selectedTrack?.url) {
      if (wavesurfer.current) {
        setIsPlaying(true);
        wavesurfer.current.load(selectedTrack.url);
        // play when ready
        wavesurfer.current.on("ready", () => {
          wavesurfer.current.play();
          let duration = calculateDuration(wavesurfer.current.getDuration());
          setDuration(duration);
        });
        //get updated current time on play
        wavesurfer.current.on("audioprocess", function (e: any) {
          let currentTime = calculateDuration(
            wavesurfer.current.getCurrentTime()
          );
          setCurrentTime(currentTime);
        });
        //update current time on seek
        wavesurfer.current.on("seek", function (e: any) {
          let currentTime = calculateDuration(
            wavesurfer.current.getCurrentTime()
          );
          setCurrentTime(currentTime);
        });
        // when wavesurfer is finished playing
        wavesurfer.current.on("finish", () => {
          setIsPlaying(false);
        });
      }
    }
  }, [selectedTrack]);

  const calculateDuration = (value: number) => {
    let minute = Math.floor(value / 60);
    let second = Math.floor(value - minute * 60);
    if (second < 10) {
      return minute.toString() + ":0" + second.toString();
    }
    return minute.toString() + ":" + second.toString();
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    wavesurfer.current.playPause();
  };

  const playPreviousTrack = () => {
    const index = tracks.findIndex((track) => track.id === selectedTrack.id);
    if (index > 0) {
      setSelectedTrack(tracks[index - 1]);
    }
  };

  const playNextTrack = () => {
    const index = tracks.findIndex((track) => track.id === selectedTrack.id);
    if (index < tracks.length - 1) {
      setSelectedTrack(tracks[index + 1]);
    }
  };

  const onVolumeChange = (e: { target: any }) => {
    const { target } = e;
    const newVolume = +target.value;
    if (newVolume) {
      setVolume(newVolume);
      wavesurfer.current.setVolume(newVolume || 1);
    }
  };

  return (
    <div style={{ marginTop: "15rem" }}>
      <div ref={waveformRef} />
      <button onClick={() => playPreviousTrack()}>previous</button>
      <button onClick={() => togglePlayPause()}>
        {isPlaying ? "pause" : "play"}
      </button>
      <button onClick={() => playNextTrack()}>next</button>
      <input
        type="range"
        id="volume"
        name="volume"
        min="0.01"
        max="1"
        step=".025"
        onChange={onVolumeChange}
        defaultValue={volume}
      />
      <label htmlFor="volume">Volume</label>

      <p>{duration}</p>
      <p>{currentTime}</p>

      <div className="playlist">
        {tracks.map((track) => (
          <div key={track.id} onClick={() => setSelectedTrack(track)}>
            {track.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
