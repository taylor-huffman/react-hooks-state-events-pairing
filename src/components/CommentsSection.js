import React from "react";
import Comments from "./Comments"

function CommentsSection({ comments }) {
    return (
        <div className="comments-section" style={{ marginTop: "20px" }}>
            <button>Hide Comments</button>
            <hr></hr>
            <h2>{comments.length} Comments</h2>
            {comments.map(comment => {
                return <Comments userName={comment.user} userComment={comment.comment} />
            })}
        </div>
    )
}

export default CommentsSection