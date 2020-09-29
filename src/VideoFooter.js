import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker"

function VideoFooter(){
    return(
        <div>
            <h2 className="videoFooter">
                <div className="videoFooter_text">
                    <h3>@Premti</h3>
                    <p>This is a description</p>
                    <div className="videoFooter_ticker">
                    <MusicNoteIcon classname="videoFooter_icon"/>
                    <Ticker mode="smooth">
                        {({index}) => (<>
                        <p>Hello blah blah blah</p>
                        </>
                        )}
                    </Ticker>
                    </div>
                </div>
                <img className="videoFooter_record" src="https://static.thenounproject.com/png/934821-200.png" alt="">

                </img>
            </h2>
        </div>
    )
}

export default VideoFooter