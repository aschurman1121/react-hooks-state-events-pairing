import React, { useState } from "react";
import CommList from './CommList'

function CommentCont ( { video } ) {
//hide comments

const [remove , setRemove ] = useState(True) //true = comments showing 

function hideCommentsBtn () {
 (setRemove ? (remove) : (return))
}

const theComments = video.comments.map((comment) => {
    return <CommList
    key = {comment.id}
    user = {comment.user}
    comment = {comment.comment}
    />
})

return(
        <div>
            <button onClick= {hideCommentsBtn}> Hide comments </button>
            <hr></hr>
            <h2>{video.comments.length} Comments</h2>
            {theComments}
        </div>
    ) 
}

export default CommentCont;