import React, { useRef, useState } from 'react'
import VideoFooter from './VideoFooter'
import './Video.css'
import VideoSidebar from './VideoSidebar'

function Video(
    {
        url,
        channel,
        description,
        song,
        likes,
        messages,
        shares
    }
){

   

    return (
        <div className="video">
            <video className="video_player" 
            loop
            onClick={onVideoPress}
            ref={videoRef}
            src={url}>

            </video>
            <VideoFooter 
                channel={channel} 
                description={description}
                song={song}
            />
            <VideoSidebar 
                likes={likes}
                messages={messages}
                shares={shares}
            />
        </div>
    )
}


export default Video