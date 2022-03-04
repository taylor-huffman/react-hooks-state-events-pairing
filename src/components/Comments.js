import React, { useState } from "react";

function Comments({ userName, userComment }) {
    
    const [commentUpCount, setCommentUpCount] = useState(0)
    const [commentDownCount, setCommentDownCount] = useState(0)

    function handleCommentUpVotes() {
        setCommentUpCount(comment => comment + 1)
    }

    function handleCommentDownVotes() {
        setCommentDownCount(comment => comment + 1)
    }

    return (
        <div className="user-comment">
            <h3>{userName}</h3>
            <p>{userComment}</p>
            <button onClick={handleCommentUpVotes}>{commentUpCount}👍</button>
            <button onClick={handleCommentDownVotes}>{commentDownCount}👎</button>
            <div>
                <button>Remove Comment</button>
            </div>
        </div>
    )
}

export default Comments