export default ({
  clName,
  videoId,
  videoTitle,
  videoDate,
  videoChannel,
  fnGetVideo,
  imgUrl,
}) => (
  <div className={clName} data-id={videoId} onClick={fnGetVideo}>
    <img src={imgUrl} className="video_img" />
    <div className="video_info_wrapper" data-id={videoId}>
      <p className="video_info">{videoTitle}</p>
      <p className="video_info">{videoDate}</p>
      <p className="video_info">{videoChannel}</p>
    </div>
  </div>
);
