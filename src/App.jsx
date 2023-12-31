

import './App.css';
import React, {useState, useEffect} from 'react';
import Post from './post';

function App() {


  const [posts, setPosts] = useState([])
  async function getPosts() {
    let response = await fetch('/gallery')
    let data = await response.json()
    setPosts(data)
  }

  function handleButtonClick(event) {
    let id = event.target.id
    console.log(id)
    fetch(`/gallery/like/${id}`, { method:'PUT',  headers: {    "Content-Type": "application/json"}})
    getPosts();

  }

  useEffect(() => {
    getPosts()
    
  },[]
  )

  console.log(posts)







    return (
      <><div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <div id="posts">
          {posts.map((post) => {
            return(<Post post={post} handleButtonClick={handleButtonClick}></Post>)
          } )}
        </div>
      </div>
      </>
    );
}

export default App;