import React from "react";

function VideoSection({ video }) {
    return (
        <div className="video-section">
            <iframe
            width="82%"
            height="500px"
            src={video.embedUrl}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
            />
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <button>{video.upvotes}👍</button>
            <button>{video.downvotes}👎</button>
        </div>
    )
}

export default VideoSection