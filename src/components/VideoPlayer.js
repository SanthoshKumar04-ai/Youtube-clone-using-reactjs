import React from 'react';
import './VideoPlayer.css';

function VideoPlayer() {
    return (
        <div className="video-player">
            <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <h3>Video Title</h3>
            <p>Video description goes here...</p>
        </div>
    );
}

export default VideoPlayer;
