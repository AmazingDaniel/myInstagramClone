import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase'

function App() {
  const [posts, setPosts] = useState([]);
    
// useEffect Runs a piece of code base on a specific condition

useEffect(() => {
  // this where the code runs
  db.collection('posts').onSnapshot(snapshot => {
    // everytime a new post is added, this code fires...
    setPosts(snapshot.docs.map(doc => ({
      id: doc.id, 
      post: doc.data()
    })));
  })
}, []);


  return (
    <div className="App">
      <div className="appHeader">
        <img
          className="appHeaderImage"
          src="https://play-lh.googleusercontent.com/9ASiwrVdio0I2i2Sd1UzRczyL81piJoKfKKBoC8PUm2q6565NMQwUJCuNGwH-enhm00"
          alt=""
        />
      </div>
      
      <h1>Programming Instagram-Clone</h1>

      {
        posts.map(({id, post}) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}  />
        ))
      }

    </div>
  );
}

export default App;