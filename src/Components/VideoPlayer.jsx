import { FaPause, FaPlay } from "react-icons/fa6";
import { useRef, useState } from "react";

const VideoPlayer = ({ url }) => {
  const [video, setVideo] = useState({ isPaused: false });
  const videoRef = useRef();
  const handleToggglePlay = (e) => {
    e.preventDefault();

    setVideo({ ...video, isPaused: !video.isPaused });
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className={`video-container ${video.isPaused && "paused"}`}>
      <div className="video-controls-container">
        <div className="controls">
          <button className="play-button" onClick={handleToggglePlay}>
            <FaPause className="play-icon" />
            <FaPlay className="pause-icon" />
          </button>
        </div>
      </div>
      <video
        className="video-player"
        ref={videoRef}
        onClick={handleToggglePlay}
        src="meet.mp4"
      />
    </div>
  );
};

export default VideoPlayer;
