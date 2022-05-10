import React, { useEffect, useState } from "react";
import { POSTS } from '../services/auth.constants';
import request from "../services/api.request";
import { useGlobalState } from "../context/GlobalState";


export default function Post() {

    const [ state ] = useGlobalState();

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
        <>
            {state && (
                
                <div className='post-box'>
                    <div className='post-list'>
                        <h4 className='post-name'>
                            {post.posts}
                        </h4>
                        {/* <div className="post-text">
                            {post.content}
                        </div> */}
                    </div>
                </div>
            )}
        </>
    ) 
}

