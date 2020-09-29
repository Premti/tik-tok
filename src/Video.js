import React, { useRef, useState } from 'react'
import VideoFooter from './VideoFooter'
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
            src="https://v16-web-newkey.tiktokcdn.com/9c015008dcfc8f8f3647b591710e6b98/5f7253fd/video/tos/useast2a/tos-useast2a-pve-0068/225c730864614ba38b2b8b595ac5a427/?a=1988&br=2152&bt=1076&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2020092815215301018907107022053167&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M3VnNXF3cnhmdjMzNDczM0ApOjo1aWloZGRnNzRkaDc0Z2cwZy8xNjVuM25fLS0wMTZzcy40NTU0YDE0Ml8tMDQzXjE6Yw%3D%3D&vl=&vr=">

            </video>
            <VideoFooter />
        </div>
    )
}


export default Video