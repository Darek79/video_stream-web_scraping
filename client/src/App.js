import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import clip from "./assets/clip.mp4";
import ReactPlayer from "react-player/youtube";
import {YT} from "./components/yt";
import "./App.scss";

function App() {
  const [play, setPlay] = useState(false);
  const [video, setVideo] = useState([]);
  const [played, setPlayed] = useState(0);
  // useEffect(() => {
  //   if (play) {
  //     axios.get("/clip").then((d) => setVideo([...d]));
  //   }
  // }, [play]);
  const myPlayer = useRef();
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
  return (
    <div className="App">
      <YT />
    </div>
  );
}

export default App;
