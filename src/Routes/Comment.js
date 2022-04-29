import React from "react";
import { Button } from 'react-bootstrap';


export default function Comment ({ comment, comments, setComments }) {
    
  //activates when the checkbox is clicked
  // const submitHandler = () => {
  //     (comment.done === false) ? (comment.done === true) : (comment.done === false); 
  // }

  //activates when my X icon is clicked and deletes the individual comment
  const deleteHandler = () => {
      setComments(comments.filter(item => item.id !== comment.id))
  }
  
  //this is the format of the comments themselves
  return(
      <div className='list-container'>
          <div className='list'>
            <p className='comment'>
            {comment.text}
            </p>
            <Button
                type='button'
                className='delete'
                style={{justifyContent: 'space-between'}} 
                onClick={() => deleteHandler(comments)} 
            >Delete
            </Button>
          </div>
      </div>
  )
}