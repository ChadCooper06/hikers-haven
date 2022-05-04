import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';


export default function Comment ({ comment, comments, setComments }) {

  const clickHandler = () => {
    return (
      comment.done === false ? true : false
    )
  }

  useEffect(() => {
    request({ url: POSTS, method: 'post'})
    .then(resp => {
        setComments(resp.data);
    });
}, []);

  //activates when my X icon is clicked and deletes the individual comment
  // const deleteHandler = () => {
  //     setComments(comments.filter(item => item.id !== comment.id))
  // }
  
  //this is the format of the comments themselves
  return(
      <div className='comment-container'>
          <div className='comment-list'>
            <p className='comment'>
            {comment.text}
            </p>
            {
              !state.currentUser &&(
                <Button
                    type='button'
                    className='make-comment'
                    style={{justifyContent: 'space-between'}} 
                    onClick={() => clickHandler(comments)} 
                >Comment
                </Button>
              )
            }
            
          </div>
      </div>
  )
}