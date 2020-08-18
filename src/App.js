import React from 'react';
import VideoCard from './VideoCard';

import './App.css';

function App() {
  return (
    <div className="app">
      
      <div className="app_top">
        <img className="app_logo" 
             src="instagram_logo.png" 
             alt="instagram logo" 
             />
             <h1>Reels</h1>
      </div>

      <div className="app_videos">
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>

    </div>
  );
}

export default App;
