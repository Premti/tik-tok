import React from 'react'
import "./VideoFooter.css"

function VideoFooter(){
    return(
        <div>
            <h2 className="videoFooter">
                I am a footer
                <div className="videoFooter_text">
                    <h3>@Premti</h3>
                    <p>This is a description</p>
                </div>
                <img className="videoFooter_record" src="https://static.thenounproject.com/png/934821-200.png" alt="">

                </img>
            </h2>
        </div>
    )
}

export default VideoFooter