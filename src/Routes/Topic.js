import React, { useState } from "react";
import { useGlobalState } from "../context/GlobalState";
import { Form } from "react-bootstrap";
import Post from "./Post";
//import { POSTS } from "../services/auth.constants";
import request from "../services/api.request";
import format from "date-fns/format";


export default function PostList() {

  const [ state ] = useGlobalState();

  const [ post, setPost ] = useState([]);
  //const [show, setShow] = useState(false);
  //const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  // const inputHandler = (e) => {
  //   setInput(e.target.value);
  // }
  
  const handleChange = (key, value) => {
    setPost({
      ...post,
      [key]: value,
    });
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    const newPost = new FormData();
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

  return (
    <>
      {
        state &&(
          <>
            <Post />
          </>
        )
      }
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