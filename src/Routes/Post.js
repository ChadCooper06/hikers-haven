import React, { useEffect, useState } from "react";
import { POSTS } from '../services/auth.constants';
import request from "../services/api.request";
import { useGlobalState } from "../context/GlobalState";


export default function Post() {
    const [ state ] = useGlobalState();
    
    const [ post, setPost ] = useState([]);
    const [ filtered, setFiltered ] = useState(post)
    //let thing = post.posts

    useEffect(() => {
        request({ url: POSTS, method: 'get' })
        .then(resp => {
            setPost(resp.data);
            setFiltered(resp.data);
        })
        .catch(error => {
            console.log('Error getting data: ' + error);
            })
    }, []);

    //https://7000-chadcooper0-hikershaven-06lvmwxp3f9.ws-us44.gitpod.io/posts/?forum__id=2

    let postInfo = filtered.map((post, i) => [
        <div className="filtered"
            key={filtered+i}>
            <div className="info-title">
                {post.title}
            </div>
            <div className="info-body">
                {post.content}
            </div>
        </div>
        ]
    )

    return (
        <>
            {state && (
                <div className='post-box'>
                    <div className='post-list'>
                        <h4 className='post-name'>
                            {postInfo}
                        </h4>
                    </div>
                </div>
            )}
        </>
    ) 
}

