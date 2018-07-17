import React from 'react';

const VideoDetail = (props) => {

    if (props.selectedVideo === null)
        return <div>Loading..</div>
        
    const url =`https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`

    return(
        <div className= "col-md-8" style={{margin: "auto 0"}}>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" title="YouTube video player" type="text/html"src={url} 
                width="640" height="390" frameBorder="0" allowFullScreen></iframe>
            </div>
            <div style={{margin: "2em auto"}}>
                <div style={{margin: "1em auto"}}><h4><strong>{props.selectedVideo.snippet.title}</strong></h4></div>
                <div>{props.selectedVideo.snippet.description}</div>
            </div>
        </div>
    )
};

export default VideoDetail;