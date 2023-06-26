import React from 'react';
import './App.css';




export default function Post({post, handleButtonClick}){
    const handleClick = (event) => {
        if (event.target.parentElement.querySelector('p').innerHTML == '' ) { 
            console.log(event.target)
            event.target.parentElement.querySelector('p').innerHTML = post.description} 
        else{ console.log(event.target); 
            event.target.parentElement.querySelector('p').innerHTML = '' }}
    return(
        <div  >
                <div id="imgDiv">
                    <img className='images' src={post.path} onClick={handleClick}/>
                    <p ></p>
                </div>
                
            
             <button id={post.id} onClick={handleButtonClick} >Like</button>
             {
                post.likes == 1 ? 
                <h4> {post.likes} person has liked this! </h4>:
                <h4> {post.likes} people have liked this! </h4>
             }

             </div>
    )
}