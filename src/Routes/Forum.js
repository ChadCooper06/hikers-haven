import React, {useEffect, useState} from "react";
import request from "../services/api.request";
import { FORUMS } from "../services/auth.constants";
import { useGlobalState } from "../context/GlobalState";

export default function Forum({ input, setInput, posts, setPosts }) {
    const [ setForums] = useState([]);

    const [ state ] = useGlobalState();

    useEffect(() => {
        request({ url: FORUMS, method: 'get'})
        .then(resp => {
            setForums(resp.data);
        });
    }, []);

    //places the value input by user to the text input
    //const [filter, setFilter] = useState('all');
    const inputHandler = (e) => {
        setInput(e.target.value);
    }
   
    const submitHandler = (e) => {
        if(e.key === 'Enter') {
            setPosts([
                ...posts,
                {
                    text: input,
                    done: false,
                }
            ])
            setInput('')
        };
    }

    
    return (
        <div className="forum-wrapper">
        {
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
                    <div className="container">
                        <h2 className= 'title'>Forums</h2>
                        <div className='add-task'>
                        {
                            !state.currentUser &&(
                            <input
                            type='text'
                            placeholder='Add Post'
                            value={input}
                            name='text'
                            className='input'
                            onChange={inputHandler} 
                            />
                            )
                        }   
                        </div>
                        <div className="post-btn">
                            {
                                !state.currentUser &&(
                                    <button className="make-post"
                                        onClick={submitHandler}>
                                    </button>
                                )
                            }
                            
                        </div>
                    </div>
                </>
            )
        }
</div>
    );
};

