import React from 'react';
import './VideoHeader.css'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';

function VideoFooter() {
  return(
    <div className="videoFooter">
      <ArrowBackIosIcon />
      <h3>Reels</h3>
      <CameraAltOutlinedIcon />
    </div>
  )
}

export default VideoFooter