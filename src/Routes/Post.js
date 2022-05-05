import React, { useEffect, useState } from 'react';
import { useGlobalState } from '../context/GlobalState';
import { POSTS } from '../services/auth.constants';
import request from '../services/api.request';


export default function Post ({ id, post, posts, setPosts }) {

    const [toggle, setToggle] = useState(null);

    const [ state ] = useGlobalState();

    // const clickHandler = () => {
    //     return (
    //         post.done === false ? true : false
    //         )
    // }

    //activates when delete is clicked and deletes the post
    const deleteHandler = () => {
        setPosts(posts.filter(item => item.id !== post.id))
    }

    let handleToggle=(id)=>{
        if(toggle===id){
            setToggle(null);
            return false
        }
       setToggle(id)
    }

    useEffect(() => {
        request({ url: POSTS, method: 'get'})
        .then(resp => {
            setPosts(resp.data);
        });
    }, []);
    
    
    //this is the format of the posts themselves
    return(
        <div className='post-container'>
        {
            state &&(  
                useEffect((value)=>{
                    const {post} = value;
                        return(
                            <div className="card" key={id}>
                            <div className="card-header" onClick={()=>handleToggle} style={{cursor:"pointer"}}> <b>{(id===toggle)?'-':'+'}</b></div>
                            {(post===toggle)?<div className="card-body"></div>:''} 
                        </div>    
                    )
                }) 
            )
        }    
        <div className='list-container'>
            <div className='list'>
                <ol>
                    <li className='post'>
                       {post} 
                    </li>
                </ol>
                <button
                    type='button'
                    className='delete'
                    onClick={() => deleteHandler(posts)} 
                />
            </div>
        </div>
    </div>
    )
}

/* <div>
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
        </div> */


/*
return(
    <div className='list-container'>
        <div className='list'>
            <input type='checkbox' 
                className='check' 
                onClick={checkHandler} 
                defaultChecked={false} 
            />
            <h4 className='todo'>
            {todo.text}
            </h4>
            <FaTimes 
                type='button'
                className='delete'
                style={{justifyContent: 'space-between'}} 
                onClick={() => deleteHandler(todos)} 
            />
        </div>
    </div>
)







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


                