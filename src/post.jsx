import React from 'react';
import './App.css';




export default function Post({post}){
    return(
        <div id={post.id}>
             <div   className='center-text' id={'image-' + post.id} >
                <img className='images' src={post.path} />
                <p className='image-text' >{post.description}</p>
            </div>
             <h4>Like</h4>
             {
                post.likes == 1 ? 
                <h4> {post.likes} person has liked this! </h4>:
                <h4> {post.likes} people have liked this! </h4>
             }

             {post.description}</div>
    )
}