import React from "react";
import Comments from "./Comments"

function CommentsSection({ comments, commentsVisible, handleComments, handleSearch }) {
    

    return (
        <div className="comments-section" style={{ marginTop: "20px" }}>
            <input placeholder="Search comments..." onChange={handleSearch}></input>
            <button onClick={handleComments}>{commentsVisible ? 'Hide Comments' : 'Show Comments'}</button>
            <hr></hr>
            <div /*style={{ display: commentsVisible ? "block" : "none" }}*/>
                <h2>{commentsVisible ? comments.length + ' Comments' : 'Comments Hidden'}</h2>
                {comments.map(comment => {
                    return <Comments key={comment.id} userName={comment.user} userComment={comment.comment} />
                })}
            </div>
        </div>
    )
}

export default CommentsSection