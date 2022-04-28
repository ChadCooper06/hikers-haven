import React from "react";
import Comment from './Comment';

const Post = ({ comments, setComments }) => {
  return (
      <div className="post-container">
          <div className="post-list">
             {comments.map((comment) => (
                 <Comment key={comment.id} 
                 comment={comment} 
                 comments={comments} 
                 setCommentss={setComments} />
             ))}
          </div>
      </div>
  ) 
}

export default Post;
