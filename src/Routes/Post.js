import React, { useEffect, useState } from "react";
import { POSTS } from '../services/auth.constants';
import request from "../services/api.request";
import { useGlobalState } from "../context/GlobalState";


export default function Post(props) {
    
    const [ state ] = useGlobalState();
    
    const [ posts, setPost ] = useState([]);
    
    useEffect(() => {
        request({ url: POSTS + '?forum_id=' + props.forumId, method: 'get' })
        .then(resp => {
            setPost(resp.data);
        })
        .catch(error => {
            console.log('Error getting data: ' + error);
        })
    }, []);

    //https://7000-chadcooper0-hikershaven-06lvmwxp3f9.ws-us44.gitpod.io/posts/?forum__id=2
    
    
    let postInfo = posts.map((post) => [
        <div className="filtered"
            key={'poste'}>
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

