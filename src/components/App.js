import video from "../data/video.js";
import VideoSection from './VideoSection'
import CommentsSection from './CommentsSection'
import { useState } from "react";

function App() {
  // console.log("Here's your data:", video);
  const [upCount, setUpCount] = useState(video.upvotes)
  const [downCount, setDownCount] = useState(video.downvotes)
  const [commentsVisible, setCommentsVisible] = useState(true)
  const [commentSearch, setCommentSearch] = useState('')
  const [comments, setComments] = useState(video.comments)

  function handleComments() {
      setCommentsVisible(commentsVisible => !commentsVisible)
  }

  function handleSearch(event) {
    setCommentSearch(event.target.value)
  }

  function handleDeleteComment(event) {
    setComments(comments => comments.filter(comment => {
      return comment.user !== event.target.value
    }))
  }

  function handleSort() {
    setComments(comments => comments.sort((a,b) => {
      let userA = a.user.toUpperCase()
      let userB = b.user.toUpperCase()
      if (userA < userB) return -1
      if (userA > userB) return 1
      return 0
    }).map(comment => comment))
  }


  const commentDisplay = comments.filter(() => {
    if (commentsVisible === true) return true
    return null
  }).filter(comment => {
    if (commentSearch === '') return true
    return comment.user.includes(commentSearch)
  })

  return (
    <div className="App" style={{ maxWidth: "1000px", marginLeft: "auto", marginRight: "auto" }}>
      <VideoSection video={video} upCount={upCount} downCount={downCount} setUpCount={setUpCount} setDownCount={setDownCount} />
      <CommentsSection comments={commentDisplay} commentsVisible={commentsVisible} handleComments={handleComments} handleSearch={handleSearch} handleDeleteComment={handleDeleteComment} handleSort={handleSort} />
    </div>
  );
}

export default App;

/* 

App
  VideoSection
  CommentsSection
    Comments


  <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
*/