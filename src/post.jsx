import React from 'react';
import './App.css';




export default function Post({post}){
    return(
        <div id={post.id}>
             <div id={'image-' + post.id} >
                <img className='images' src={post.path} />
                <p>Heyyy</p>
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