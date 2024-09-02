import React from 'react';
import './VideoItem.css';

function VideoItem({ video }) {
    return (
        <div className="video-item">
            <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
            <div className="video-info">
                <h4>{video.title}</h4>
                <p>{video.channel}</p>
            </div>
        </div>
    );
}

export default VideoItem;
