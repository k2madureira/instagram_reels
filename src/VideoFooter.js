import React from 'react';
import './VideoFooter.css'

import { Button, Avatar } from '@material-ui/core';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';

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
    </div>
  )
}

export default VideoFooter