import React from 'react';
import Ticker from 'react-ticker';
import './VideoFooter.css'

import { Button, Avatar } from '@material-ui/core';

import MusicNoteIcon from '@material-ui/icons/MusicNote'

function VideoFooter({ channel, song, likes, shares, avatarSrc }) {
  return(
    <div className="videoFooter">
      <div className="videoFooter_text">
        <Avatar src={avatarSrc} />
        <h3>
          {channel}
          <Button>Follow</Button>
        </h3>
      </div>
      <div className="videoFooter_ticker">
        <MusicNoteIcon 
          className="videoFooter_icon"
        />
        <Ticker>
          {({ index }) =>(
            <>
              <h1>{song}</h1>
            </>
          )}
        </Ticker>
      </div>   
    </div>
  )
}

export default VideoFooter