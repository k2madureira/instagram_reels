import React, { useRef, useState } from 'react';
import './VideoCard.css';
import './VideoHeader';

function VideoCard() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      // stop the video
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      // PLay the video
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  }

  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard_player"
        src="https://instagram.fssa2-1.fna.fbcdn.net/v/t50.2886-16/117671750_236339897547386_346340641255910893_n.mp4?_nc_ht=instagram.fssa2-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=nq15dig-ddEAX-Z3Ni8&oe=5F3E80CD&oh=2f1b275e8d3ce5774c499899c407db9c"
        alt="IG reel video"
        loop
      />
    </div>
  )
}

export default VideoCard;