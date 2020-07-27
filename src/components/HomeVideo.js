import React from 'react'
import { Player, ControlBar } from 'video-react';
import VideoPlayer from 'react-video-js-player';

function HomeVideo() {
    return (
        <div className="videoPlayer">
                <VideoPlayer
                

                    controls={true}
                    src="http://www.example.com/path/to/video.mp4"
                    // poster={this.state.video.poster}
                    // width="1600%"
                    
                    bigPlayButtonCentered={true}
                    height="835px"
                    />
   

        </div>
    )
}

export default HomeVideo


// https://youtu.be/JAfTWnmapJI