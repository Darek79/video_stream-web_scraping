import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import {PreviewVideo} from "./video_preview";
import {fetchData} from "../utils/utils";
// import clip from "./assets/clip.mp4";
import ReactPlayer from "react-player/youtube";
import "./yt.scss";
export const YT = ({fnShow}) => {
  const [play, setPlay] = useState(false);
  const [sound, setSound] = useState(0.5);
  const [played, setPlayed] = useState(0);
  const [mute, setMute] = useState(false);
  const myPlayer = useRef(null);
  const myId = useRef("");
  const [link, setLink] = useState("");
  const [fetched, setFetched] = useState([]);
  // const [showVideo, setVideo] = useState("");
  useEffect(() => {
    if (link) {
      fetchData("video", link, setFetched);
      setLink("");
    }
  }, [link]);
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
  const getLink = (e) => {
    setLink(e.target.getAttribute("data-index"));
  };
  const getId = (e) => {
    // console.log(e.target.parentNode);
    myId.current = e.target.parentNode.getAttribute("data-id");
    console.log(e.target.parentNode.getAttribute("data-id"));
  };
  return (
    <section className="react_player">
      <div className="player_wrapper">
        <ReactPlayer
          ref={myPlayer}
          url={`https://www.youtube.com/watch?v=${myId.current}`}
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
        </button>
        <div className="input_volume_wrapper">
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
      </div>
      <section className="content_right">
        <PreviewVideo
          fn1Set={getLink}
          preview={fetched}
          fn2Get={getId}
          fnReturn={fnShow}
        />
      </section>
    </section>
  );
};
