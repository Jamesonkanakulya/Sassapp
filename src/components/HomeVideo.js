import React,{useContext} from 'react'
import { Player, ControlBar } from 'video-react';
import VideoPlayer from 'react-video-js-player';
import { LabettieContext } from './Context';

function HomeVideo() {
    const  videos=useContext(LabettieContext)
    if(!videos){
        return <div>
            Loading.....
        </div>
    }

 

    


   
    return (
        <div className="videoPlayer">
             { videos.context.map(item =>{
                 return <div key={item.id}  className="container">
                     <VideoPlayer
                

                controls={true}
                src={item.videos[0]}
                // poster={this.state.video.poster}
                // width="1500px"
                
                bigPlayButtonCentered={true}
                height="485px"
                />
                     
                 </div>
             })

             }


   

        </div>
    )
}

export default HomeVideo


// https://youtu.be/JAfTWnmapJI