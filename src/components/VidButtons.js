import React, { useState } from "react"

function VidButtons({video}) {
const [upCount, setUpCount] = useState(video.upvotes)
    function handleUpClick() {
        setUpCount(upCount + 1)
    }
const [downCount, setDownCount] = useState(video.downvotes)
    function handleDownClick(){
        setDownCount(downCount - 1)
    }
return (
    <div>
        <button onClick= {handleUpClick}>{upCount}👍</button>
        <button onClick = {handleDownClick}>{downCount}👎 </button>
    </div>
)}

export default VidButtons;