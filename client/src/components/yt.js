import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
// import clip from "./assets/clip.mp4";
import ReactPlayer from "react-player/youtube";
import "./yt.scss";
export const YT = () => {
  const [play, setPlay] = useState(false);
  const [sound, setSound] = useState(0.5);
  const [played, setPlayed] = useState(0);
  const [mute, setMute] = useState(false);
  const myPlayer = useRef(null);
  // useEffect(() => {
  //   if (play) {
  //     axios.get("/clip").then((d) => setVideo([...d]));
  //   }
  // }, [play]);
  // useEffect(() => {
  //   if (myPlayer.current) {
  //     setTime(() =>
  //       (
  //         (myPlayer.current.getDuration() -
  //           myPlayer.current.getSecondsLoaded()) /
  //         60
  //       ).toFixed(2)
  //     );
  //   }
  // }, [played]);

  const start = () => {
    setPlay((p) => !p);
  };
  const progress = (p, f) => {
    console.log("l");
    console.log(p);
    console.log(myPlayer.current);
    setPlayed(() => p.played);
  };
  const seek = (e) => {
    setPlayed(() => myPlayer.current.seekTo(e.target.value));
  };
  const mouseDown = () => {
    setPlay(() => false);
  };
  const mySound = (e) => {
    setSound(() => e.target.value);
  };
  const onMute = () => {
    setMute((p) => !p);
  };
  return (
    <section className="react_player">
      <div className="player_wrapper">
        <ReactPlayer
          ref={myPlayer}
          url="https://www.youtube.com/watch?v=9mVgE0wxg4g&ab_channel=TheXclusiveAce"
          playing={play}
          onProgress={(p, f) => progress(p, f)}
          volume={sound}
          muted={mute}
          // onSeek={(s) => seek(s)}
        />
      </div>
      <p>{myPlayer.current && myPlayer.current.getDuration() / 60}</p>
      <div className="play_buttons">
        <button
          onClick={start}
          className={`play ${!play ? "isActive" : "isNotActive"}`}
        >
          {!play ? "play" : "stop"}
        </button>
        <input
          className="input_streamed"
          onMouseDown={mouseDown}
          // onMouseUp={mouseDown}
          onChange={seek}
          type="range"
          min="0"
          max="0.999999"
          step="any"
          value={played}
        ></input>
      </div>
      <div className="input_control">
        <button
          className={`input_mute ${!mute ? "isActive" : "isNotActive "}`}
          onClick={onMute}
        >
          mute
        </button>{" "}
        <input
          className="input_volume"
          type="range"
          min="0"
          max="1"
          step="any"
          value={sound}
          onChange={mySound}
        ></input>
      </div>
    </section>
  );
};
