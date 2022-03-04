import video from "../data/video.js";
import VideoSection from './VideoSection'
import CommentsSection from './CommentsSection'

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App" style={{ maxWidth: "1000px", marginLeft: "auto", marginRight: "auto" }}>
      <VideoSection video={video} />
      <CommentsSection comments={video.comments}/>
    </div>
  );
}

export default App;

/* 

App
  VideoSection
  CommentsSection


  <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
*/