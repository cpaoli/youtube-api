import React from 'react';
import Video from './video_item'

const VideoList = ({videos, onSelectVideo}) => {

    const videosList = videos.map((video, index) => {
            return(
                <div key={index}>
                    <li className="list-group-item" onClick={() => onSelectVideo(video)}>
                        <Video video={video}/>
                    </li>
                </div>
            )
        })

    return(
        <ul className="col-md-4 list-group pull-right">
            {videosList}
        </ul>
    )
};

export default VideoList;