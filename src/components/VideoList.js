import React from 'react';
import VideoItem from './VideoItem';
import './VideoList.css';

function VideoList() {
    const videos = [
        { id: 1, title: 'React Tutorial for Beginners', thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg', channel: 'Code Academy' },
        { id: 2, title: 'Understanding JavaScript Closures', thumbnail: 'https://img.youtube.com/vi/o1IaduQICO0/mqdefault.jpg', channel: 'JS Mastery' },
        { id: 3, title: 'CSS Grid vs Flexbox', thumbnail: 'https://img.youtube.com/vi/9zBsdzdE4sM/mqdefault.jpg', channel: 'CSS Tricks' },
        { id: 4, title: 'Node.js Crash Course', thumbnail: 'https://img.youtube.com/vi/ENrzD9HAZK4/mqdefault.jpg', channel: 'Node Gurus' }
    ];

    return (
        <div className="video-list">
            {videos.map(video => (
                <VideoItem key={video.id} video={video} />
            ))}
        </div>
    );
}

export default VideoList;
