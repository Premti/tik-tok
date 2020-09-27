import React, { useRef, useState } from 'react'
import './Video.css'

function Video(){

    const [playing, setPlaying] = useState(false)

    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (playing){
        videoRef.current.pause()
        setPlaying(false)
        }
        else {
            videoRef.current.play()
            setPlaying(true)
        }
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