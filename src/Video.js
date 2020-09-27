import React, { useRef } from 'react'
import './Video.css'

function Video(){

    const videoRef = useRef(null);

    const onVideoPress = () => {
        videoRef.current.play()
    }

    return (
        <div className="video">
            <video className="video_player" 
            loop
            onClick={onVideoPress}
            ref={videoRef}
            src="https://www.tiktok.com/@justamum/video/6876677387870915841">

            </video>
        </div>
    )
}


export default Video