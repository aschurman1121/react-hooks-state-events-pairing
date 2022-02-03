import CommentCont from "./CommentCont";

function CommList( { user, comment } ) {
    return (
       
        <div>
            <h2>{user}</h2>
            <small>{comment}</small>
        </div>

        ) 
}

export default CommList;