import React from 'react';


export default function Post ({ post, posts, setPosts }) {
    
    const clickHandler = () => {
        (post.done === false) ? (post.done === true) : (post.done === false); 
    }

    //activates when delete is clicked and deletes the post
    const deleteHandler = () => {
        setPosts(posts.filter(item => item.id !== post.id))
    }
    
    //this is the format of the posts themselves
    return(
        <div className='list-container'>
            <div className='list'>
                <input type='text' 
                    className='post-input' 
                    onClick={clickHandler} 
                    defaultChecked={false} 
                />
                <p className='post'>
                {post.text}
                </p>
                <button
                    type='button'
                    className='delete'
                    onClick={() => deleteHandler(posts)} 
                />
            </div>
        </div>
    )
}