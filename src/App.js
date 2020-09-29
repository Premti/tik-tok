import React, {useState, useEffect} from 'react';
import './App.css';
import Video from './Video.js'
import db from './firebase';

function App() {

  const [videos, setVideos] = useState([])
  useEffect(() => {
    db.collection('videos').onSnapshot(snapshot => 
      setVideos([snapshot.docs.map(doc => doc.data) 
      ]))
  } ,[])

  return (
    <div className="app">
      <div className="app_videos">

        {videos.map(
          ({url, channel, description, song, likes, messages, shares}) =>
          <Video url={url}
          channel={channel}
          song={song}
          likes={likes}
          messages={messages}
          shares={shares}
          />
        )}

        {/* <Video 
        url=""
        channel="Premti"
        description="Works"
        song="Tune"
        likes={123}
        messages={400}
        shares={25}
        />
        <Video />
        <Video />
        <Video /> */}
      </div>
    </div>
    
  )
}

export default App;
