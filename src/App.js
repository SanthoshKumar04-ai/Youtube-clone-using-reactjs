import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import VideoPlayer from './components/VideoPlayer';
import VideoList from './components/VideoList';
import './App.css';

function App() {
    return (
        <div className="app">
            <Navbar />
            <div className="main-content">
                <Sidebar />
                <div className="content">
                    <VideoPlayer />
                    <VideoList />
                </div>
            </div>
        </div>
    );
}

export default App;
