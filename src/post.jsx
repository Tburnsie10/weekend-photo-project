import React from 'react';



export default function Post({post}){
    return(
        <div> {post.id} {post.path} {post.description} {post.likes} </div>
    )
}