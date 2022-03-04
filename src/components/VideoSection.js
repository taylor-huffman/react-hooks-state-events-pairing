import React from "react";

function VideoSection({ video, upCount, downCount, setUpCount, setDownCount }) {

    function handleUpVotes() {
        setUpCount(count => count + 1)
    }

    function handleDownVotes() {
        setDownCount(count => count + 1)
    }

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
            <button onClick={handleUpVotes}>{upCount}👍</button>
            <button onClick={handleDownVotes}>{downCount}👎</button>
        </div>
    )
}

export default VideoSection