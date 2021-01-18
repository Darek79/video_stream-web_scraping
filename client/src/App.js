import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import ReactPlayer from "react-player/youtube";
import ModuleButon from "./components_main/title";
import {YT} from "./components_yt/yt";
import {WebMain} from "./components_web/web_main";
import "./App.scss";

function App() {
  const [yout, setYT] = useState(false);
  const [scrape, setScrape] = useState(false);

  const fnYT = () => {
    setYT((p) => !p);
  };
  const fnScrape = () => {
    setScrape((p) => !p);
  };
  return (
    <div className="App">
      {!yout ? (
        <div
          className="title_btn"
          style={scrape ? {display: "none"} : {display: ""}}
        >
          <ModuleButon module="You Tube" fn={fnYT} />
        </div>
      ) : (
        <YT fnShow={fnYT} />
      )}
      {!scrape ? (
        <div
          className="title_btn"
          style={yout ? {display: "none"} : {display: ""}}
        >
          <ModuleButon module="Web Scrape" fn={fnScrape} />
        </div>
      ) : (
        <WebMain fnShow={fnScrape} />
      )}
    </div>
  );
}

export default App;

{
  /* <WebMain fnShow={fnScrape} */
}
