import React, { useRef, useState } from 'react';
import './VideoCard.css';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';


function VideoCard({ url, likes, shares, channel, avatarSrc, song }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      
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
        src={url}
        alt="IG reel video"
        loop
      />

      <VideoFooter
        channel={channel}
        likes={likes}
        shares={shares}
        avatarSrc={avatarSrc}
        song={song}
      />
    </div>

      
  )
}

export default VideoCard;