import React from 'react';
import './App.css';




export default function Post({post}){
    return(
        <div onClick={(event) => {
            if (event.target.parentElement.querySelector('p')) { 
            event.target.parentElement.querySelector('p').remove()} 
            else{ console.log(event.target); 
            event.target.innerHTML += `<p class='image-text' >${event.target.parentElement.description}</p>`}}}  className='center-text' description={post.description} id={'image-' + post.id} >
                <img className='images' src={post.path} />
                
            
             <h4>Like</h4>
             {
                post.likes == 1 ? 
                <h4> {post.likes} person has liked this! </h4>:
                <h4> {post.likes} people have liked this! </h4>
             }

             </div>
    )
}