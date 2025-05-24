import React from "react";
import bgVideo from "../assets/sarc.mp4";

const BackgroundVideo = () => (
  <video
    src={bgVideo}
    autoPlay
    muted
    className="bg-video"
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      objectFit: "cover",
      zIndex: -1,
    }}
    loop={false} //for no loop, but the vid stays in react dom, its not removed
  />
);

export default BackgroundVideo;
