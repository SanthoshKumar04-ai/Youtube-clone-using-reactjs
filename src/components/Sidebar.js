import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li><i className="fas fa-home"></i> Home</li>
                <li><i className="fas fa-fire"></i> Trending</li>
                <li><i className="fas fa-folder-open"></i> Subscriptions</li>
                <li><i className="fas fa-history"></i> History</li>
            </ul>
        </div>
    );
}

export default Sidebar;
