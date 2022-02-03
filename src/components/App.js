
import video from "../data/video.js";
import VideoCont from "./VideoCont.js";
import CommentCont from './CommentCont';


function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoCont video={video} />
      <CommentCont video={video} />
    </div>
  );
}

export default App;
