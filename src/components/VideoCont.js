import react from "react";
import VidButtons from "./VidButtons";

function VideoCont( {video} ) {
return(  
<> 
    <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
    />
    <h2>{video.title} </h2>
    <small>{video.views} views | Uploaded {video.createdAt}</small>
    <VidButtons video={video}/>
</>
)

}

export default VideoCont;