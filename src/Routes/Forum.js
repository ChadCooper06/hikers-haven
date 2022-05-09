import React, { useState, useEffect} from "react";
import request from "../services/api.request";
import { useGlobalState } from "../context/GlobalState";
import { FORUMS } from "../services/auth.constants";
import PostList from "./Topic";
//import { POSTS } from "../services/auth.constants";

export default function Forum() {

    const [ forums, setForums ] = useState([]);

    const [ state ] = useGlobalState();

    const [ clicked, isClicked ] = useState(false);

    let handleToggle = (topic) => {
        if(clicked === topic){
            return isClicked(false)
        }
       isClicked(topic);
    }

    useEffect(() => {
        request({ url: FORUMS, method: 'get'})
        .then(resp => {
            setForums(resp.data);
        });
    }, []);

    //places the value input by user to the text input
    //const [posts, setPosts] = useState('all');
    // const inputHandler = (e) => {
    //     setInput(e.target.value);
    // }
   
    // const submitHandler = (e) => {
    //     if(e.key === 'Enter') {
    //         setForums([
    //             ...forums,
    //             {
    //                 text: input,
    //                 done: false,
    //             }
    //         ])
    //         setInput('')
    //     };
    // }

    const topicOut = forums.map((topic, index, key) => 
        // Each needs a unique ID and I am using the index of each as its key and that key as the ID
        <div className="accordion" 
            key={index} 
            id={key}
            >
            
            {
                state && (
                    <div className="accordion-item">
                        <h2 className="accordion-header"
                            id={topic}>
                            <button className="accordion-button" 
                                key={topic} 
                                type="button" 
                                onClick={() => handleToggle()}
                                data-bs-toggle="collapse" 
                                date-bs-target="this.collapse"
                                aria-expanded="false"
                                aria-controls="accordion-collapse"
                                >
                                {topic.topics}
                            </button>
                        </h2>
                        <div className="post-wrapper"
                            id="this.collapse"
                            aria-labelledby={index} 
                            data-bs-parent={key}
                        >
                            <div className="post-text">
                                <div>sample</div>
                                <div>{<PostList />}</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>)

    return (
        <>
        <div className="forum-wrapper">
            { // Shows these no matter if a user is logged in or not
                state &&(
                    <>
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
                    </>
                )
            }
        </div>
        </>
    );
};
