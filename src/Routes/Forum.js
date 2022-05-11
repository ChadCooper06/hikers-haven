import React, { useState, useEffect} from "react";
import request from "../services/api.request";
//import { useGlobalState } from "../context/GlobalState";
import { FORUMS } from "../services/auth.constants";
//import PostList from "./Topic";
//import { POSTS } from "../services/auth.constants";
//import Post from "./Post";
import ForumAccordion from "./ForumAccordion";

export default function Forum() {
    
    const [ forums, setForums ] = useState([]);

    //const [ state ] = useGlobalState();


    
    useEffect(() => {
        request({ url: FORUMS, method: 'get'})
        .then(resp => {
            setForums(resp.data);
            
        });
    }, []);



    const topicOut = forums.map((forum, index) => <ForumAccordion forum={forum} index={index} key={index} />)
        // Each needs a unique ID and I am using the index of each as its key and that key as the ID
        
    return (
        <>
        <div className="forum-wrapper">
                        <div className="forum-head">
                            <h1>Forums</h1>
                            <h4 className="rules">Please adhere to the Hiker's Haven Forum rules of decorum.</h4>
                            <div>
                                <ol className="rules-list"> 
                                    <li>Don't use foul or demeaning language (your account will be deleted).</li>
                                    <li>Photos are not allowed, although you can post links to your Instagram or Ocular in your post.</li>
                                    <li>Political and religious posts or comments are not allowed (this is a family friendly and inclusive site).</li>
                                    <li>Selling of items on this site is not allowed.</li> 
                                </ol>
                            </div>
                        </div>
                        <div className="forum-container">
                            <h2 className='forum-title'>Forum Topics</h2>
                            <div className='forum-list'>
                                <div className="forum-item">
                                    {topicOut}
                                </div>
                            </div>
                        </div>
                    
        </div>
        </>
    );
};
