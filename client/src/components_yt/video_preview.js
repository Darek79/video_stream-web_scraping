import React, {lazy, Suspense} from "react";
// import VideoItem from "./video_item";
import {changeDate} from "../utils/utils";
const VideoItem = lazy(() => import("./video_item"));
export const PreviewVideo = ({fn1Set, fn2Get, preview, fnReturn}) => {
  return (
    <section className="channel_wrapper">
      {/* <div className="play channel_title_wrapper"> */}
      <button
        className="play channel_title"
        onClick={fn1Set}
        data-index="UCcP3tjR0L3zJrzLpYU1O4Rg"
      >
        Tv Strassensound
      </button>
      <button
        className="play channel_title"
        onClick={fn1Set}
        data-index="UC4V1z5uOPGL0FodEEScHd8g"
      >
        Mr Rap
      </button>
      <button className="channel_title back_title" onClick={fnReturn}>
        Back to Title
      </button>
      {/* </div> */}
      <div className="preview_wrapper">
        {preview &&
          preview.map((el) => {
            let d = "";
            if (el.snippet.publishedAt) {
              d = changeDate(el.snippet.publishedAt);
            }
            return (
              <Suspense fallback={"loading"} key={el.etag}>
                <VideoItem
                  clName="video_item_wrapper"
                  fnGetVideo={fn2Get}
                  videoId={el.id.videoId}
                  videoTitle={el.snippet.title}
                  videoDate={d}
                  videoChannel={el.snippet.channelTitle}
                  imgUrl={el.snippet.thumbnails.default.url}
                />
              </Suspense>
            );
          })}
      </div>
    </section>
  );
};
