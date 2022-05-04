import React, { useState, useEffect } from "react";
import request from "../services/api.request";
import { FORUMS } from "../services/auth.constants";
import { useGlobalState } from "../context/GlobalState";
//import { POSTS } from "../services/auth.constants";

export default function Forum() {
    const [ forums, setForums ] = useState([]);

    const [ state ] = useGlobalState();

    // const [ toggle, setToggle ] = useState(null);

    // let handleToggle=(id)=>{
    //     if(toggle===id){
    //         setToggle(null);
    //         return false
    //     }
    //    setToggle(id)
       
    // }

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

    
    return (
        <>
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
                            <h2 className='title'>Forums</h2>
                            <div className='forum-list'>
                                <ol>
                                    <li className="forum-item">
                                        {forums.data}
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
        {/* <div>
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
        </div> */}
        </>
    );
};


// <div className="row">
//     <div className="col-sm-4">
//         <h3>React Accordion</h3>
//         <posts handleToggle={handleToggle} toggle={toggle} />
//         </div>
//     </div>
// </div> 
