import React from "react";

function Comments({ userName, userComment }) {
    return (
        <div className="user-comment">
            <h3>{userName}</h3>
            <p>{userComment}</p>
        </div>
    )
}

export default Comments