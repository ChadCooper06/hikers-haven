import React, {useEffect, useState} from "react";
import request from "../services/api.request";
import { FORUMS } from "../services/auth.constants";

export default function Forum({ input, setInput, posts, setPosts }) {
    const [forums, setForums] = useState([]);

    useEffect(() => {
        request({ url: FORUMS, method: 'get'})
        .then(resp => {
            setForums(resp.data);
        });
    }, []);
    console.log(forums.topics); 

    //places the value input by user to the text input
    //const [filter, setFilter] = useState('all');
    const inputHandler = (e) => {
        setInput(e.target.value);
    }
    //on clicking enter, this sets my todo to the given input and gives the time as an id
    //used empty string at end to clear input field after entering
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

    //draws my input, adds fns to it and draws my buttons below-theyre not working yet
    return (
        <>
        <div className="forum-head">
        <h1>Forums</h1>
        <h4 className="rules">Please adhere to the Hiker's Haven Forum rules of decorum.</h4>
            <div>
            <ol className="rules-list"> 
                <li>Don't use foul or demeaning language (your account will be deleted).</li>
                <li>Photos are not allowed, although you can post links to your Instagram or Ocular in your post.</li>
                <li>Political and religious posts or comments are not allowed (this is a family friendly and inclusive site).</li> 
            </ol>
            </div>
        
        </div>
        <div className="container">
            <h2 className= 'title'>Forums</h2>
            <div className='add-task'>
            <input
                type='text'
                placeholder='Add Post'
                value={input}
                name='text'
                className='input'
                onChange={inputHandler} 
            />
            </div>
            <div className="post-btn">
                <button className="make-post"
                    onClick={submitHandler}>
                </button>
            </div>
        </div>
        </>
    );
};
/*
const Forum = () => {
  return (
    <div>
        <h1>Forums</h1>
        <p>Please adhere to the Hiker's Haven forum rules of decorum.<br /> 
            1. Don't use foul or demeaning language (your account will be deleted).<br />
            2. Photos are not allowed, although you can post links to your Instagram or Ocular in your post.<br />
            3. Political and religious posts or comments are not allowed (this is a family friendly and inclusive site).<br /> 
        </p>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    General Discussion
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>Posts go here.</strong> They will be about things.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Family Friendly
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>Posts go here.</strong> They will be about things.               
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Trail Talk
                </button>
                </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Posts go here.</strong> They will be about things.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Gear
                </button>
                </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Posts go here.</strong> They will be about things.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Camping
                </button>
                </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Posts go here.</strong> They will be about things.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    Wild Animal Encounters
                </button>
                </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Posts go here.</strong> They will be about things.
                    </div>
                </div>
            </div>
        </div>
  </div>
  );
};

export default Forum;
*/