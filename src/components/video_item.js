import React from 'react';

const Video = (props) =>{

    const url =props.video.snippet.thumbnails.default.url;
    return(
        <div className="video-list media">
            <div className="media-left">
                <img src={url} alt="img" className="media-object"/>
            </div>
            <div className="media-body">
                <span className="media-object"><strong>{props.video.snippet.title}</strong></span>
                <div className="media-object video-title">
                    {props.video.snippet.channelTitle}
                </div>
            </div>
        </div>
    )
};

export default Video;