import React, { useState } from "react";
import CommList from './CommList'

function CommentCont ( { video } ) {
//hide comments
const theComments = video.comments.map((comment) => {
    return <CommList
    key = {comment.id}
    user = {comment.user}
    comment = {comment.comment}
    />
})

const [remove , setRemove ] = useState(true) //true = comments showing 


function hideCommentsBtn () {
    setRemove(remove => !remove)
}

return(
        <div>
            <button onClick= {hideCommentsBtn}> Hide comments </button>
            <hr></hr>
            <h2>{video.comments.length} Comments</h2>
            {remove ? theComments : false}
        </div>
    ) 
}

export default CommentCont;