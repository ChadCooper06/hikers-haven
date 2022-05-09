import React, { useEffect, useState } from "react";
import { POSTS } from '../services/auth.constants';
import request from "../services/api.request";


export default function Post() {

    const [ post, setPosts ] = useState([]);

    // const deleteHandler = () => {
    //     setPosts(posts.filter(item => item.id !== post.id))
    // }


    useEffect(() => {
        request({ url: POSTS, method: 'get'})
        .then(resp => {
            setPosts(resp.data);
        });
    }, []);

    return (
        <div className='post-box'>
            <div className='post-list'>
                <h4 className='post-name'>
                    {post.title}
                </h4>
                <div className="post-text">
                    {post.content}
                </div>
            </div>
        </div>
    ) 
}


/*import React, { useEffect} from 'react';
import request from '../services/api.request';
import { useGlobalState } from '../context/GlobalState';

//const [toggle, setToggle] = useState(null);

const [ posts, setPosts] = useGlobalState("");


//activates when delete is clicked and deletes the post
// const deleteHandler = () => {
    //     setPosts(posts.filter(item => item.id !== post.id))
    // }
    
    useEffect(() => {
        request({ url: POSTS, method: 'get'})
        .then(resp => {
            setPosts(resp.data);
        });
    }, [posts]);

    return(
        <div className="format">
            <ol>
                <li>
                <h2 className="post-header">
                    {post.topic[0].title}
                </h2>
                <div className="post-content">
                    {post.topic[0].content}
                     <h6 className='posted-by'
                        id={username}>
                        <div className='poster' key={username}>
                        {username.posts}
                        </div>
                    </h6> 
                </div>
                </li>
            </ol>
        </div>)
    }
    )
    
    export default function Post () {
    const [ state ] = useGlobalState();
    //this is the format of the posts themselves
    return(
        <div className='post-container'>
        {
            state &&(  
            <>
                <div className='forum-list'>
                    <div className="forum-item">
                        {postOut}
                    </div>
                </div>
            </>
        )
        }

       
        </div>
    )
}
 {
            state.currentUser &&(
                <button
                    type='button'
                    className='delete'
                    // onClick={() => deleteHandler(post.posts)} 
                >Delete</button>
            )
        }   
 <div>
            {
                !state.currentUser &&(
                    <>
                    <div className='add-post'>
                        <input
                            type='input'
                            placeholder='Add Post'
                            value={input}
                            name='text'
                            className='input'
                            onChange={inputHandler} 
                        />
                        <div className="post-btn">
                            <button className="make-post"
                                onClick={submitHandler}>
                            </button>
                        </div>
                    </div>
                    </>
                )
            }   
        </div> 



{
    !state.currentUser &&(
        <>
        <input
            type='input'
            placeholder='Add Post'
            value={input}
            name='text'
            className='input'
            onChange={inputHandler} 
        />
        <div className="post-btn">
            <button className="make-post"
                onClick={submitHandler}>
            </button>
        </div>
        </>
    )
}   
*/


                