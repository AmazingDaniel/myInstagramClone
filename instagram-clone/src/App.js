import React from 'react';
import './App.css';
import Post from './Post';

function App() {
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
      

      <Post />
      <Post />
      <Post />
      
    </div>
  );
}

export default App;