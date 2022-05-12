import React, { useState } from "react";
import { useGlobalState } from "../context/GlobalState";
import { Form } from "react-bootstrap";
import request from "../services/api.request";
import format from "date-fns/format";


export default function PostList({forumId}) {

  const [ state ] = useGlobalState();

  const [ post, setPost ] = useState([]);
  
  const handleChange = (key, value) => {
    return (
      setPost({
        ...post,
        [key]: value,
      })
    )
  }

  // Posts are created via this func. 
  // Input from the Form below is placed into the title and content fields while 
  // others are filled with the formatted date, logged in user and the id of the forum it is written in

  const handleCreatePost = async (e) => {
    e.preventDefault();
    const newPost = new FormData();
    newPost.append('forum', forumId);
    newPost.append("title", post.title);
    newPost.append("content", post.content);
    newPost.append("date_added", format(Date.now(), 'yyyy-MM-dd'));
    newPost.append('user_id', state.currentUser.user_id);
    
    // request comes from api.request.js
    let resp = await request({
      url: "posts/",
      method: "POST",
      data: newPost,
    }).then((resp) => setPost(resp.data));
    window.location.reload('/forum');
  }
  
  // This Form field is only visible when a user is logged in
  return (
    <>
      {
        state.currentUser &&(
          <div className='add-post'>
            <Form>
              <Form.Group>
                <Form.Control
                  as='textarea'
                  rows={1}
                  placeholder="Post Title"
                  className='title'
                  maxLength={50}
                  onChange={(e) => handleChange("title", e.target.value)}
                  autoFocus
              />
              <Form.Control
                  as='textarea'
                  rows={4}
                  placeholder="Post Content"
                  className='body'
                  maxLength={2000}
                  onChange={(e) => handleChange("content", e.target.value)}
                  autoFocus
              />
              <button onClick={handleCreatePost}>Add</button>
              </Form.Group>
            </Form>
          </div> 
        )
      }
    </>
  )
}