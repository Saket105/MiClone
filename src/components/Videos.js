import React from "react";
import VideoCard from "./VideoCard";
import "../styles/videos.css";

const Videos = ({ videos }) => {
  return (
    <div className="videos">
      {videos.map((item, index) => (
        <VideoCard name={item.name} image={item.image} key={item.image} />
      ))}
    </div>
  );
};

export default Videos;
