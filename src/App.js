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
        
      </div>
      <h1>Clone instagram</h1>
      <div className="app_videos">
        <VideoCard
          channel='icescream.amv'
          avatarSrc='https://instagram.fssa2-2.fna.fbcdn.net/v/t51.2885-19/s150x150/95385496_252982112778058_4621036647562084352_n.jpg?_nc_ht=instagram.fssa2-2.fna.fbcdn.net&_nc_ohc=9clsoBaahPIAX-3trux&oh=bf8add5877ae423605d50e8ff827c9aa&oe=5F65863C'
          song='[Demon Slayer: Kimetsu no Yaiba]'
          url='https://instagram.fssa2-1.fna.fbcdn.net/v/t50.2886-16/117671750_236339897547386_346340641255910893_n.mp4?_nc_ht=instagram.fssa2-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=nq15dig-ddEAX-Z3Ni8&oe=5F3E80CD&oh=2f1b275e8d3ce5774c499899c407db9c'
          likes={5000}
          shares={4500}
        />
        
      </div>

    </div>
  );
}

export default App;
