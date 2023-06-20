

import './App.css';
import React, {useState, useEffect} from 'react';

function App() {


  const [posts, setPosts] = useState([])
  async function getPosts() {
    let response = await fetch('/gallery')
    let data = await response.json()
    setPosts(data)
  }

  useEffect(() => {
    getPosts()
    
  },[]
  )
  
  console.log(posts)





    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;