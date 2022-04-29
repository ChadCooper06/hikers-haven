import React from "react";
import Comment from './Comment';

const Post = ({ comments, setComments }) => {
    return (
        <div className="post-container">
          
            {comments.map((comment) => (
                <Comment key={comment.id} 
                comment={comment} 
                comments={comments} 
                setCommentss={setComments} />
            ))}
          
        </div>
    ) 
}

export default Post;
