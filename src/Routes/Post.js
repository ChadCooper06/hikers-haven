import React, { useEffect, useState } from "react";
import { POSTS } from '../services/auth.constants';
import request from "../services/api.request";
import { useGlobalState } from "../context/GlobalState";


export default function Post(props) {
    
    const [ state ] = useGlobalState();
    
    const [ posts, setPost ] = useState([]);
    
    // The posts in the DB are pulled and placed into the appropriate areas of the forum 
    // based on the ID of the topic they were written under so they display in the singular 
    // spot they need to be

    useEffect(() => {
        request({ url: POSTS + '?forum_id=' + props.forumId, method: 'get' })
        .then(resp => {
            setPost(resp.data);
        })
        .catch(error => {
            console.log('Error getting data: ' + error);
        })
    }, []);
    
    // The layout of the information that is shown in each post-only title and content are visible in front end

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
        // Posts are visible all the time by all users, or none
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

