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
      

      <Post username="guest1" caption="Hi Im New" imageUrl="https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg" />
      <Post username="guest2" caption="Hi Im Second" imageUrl="https://media4.s-nbcnews.com/i/newscms/2019_05/1405957/elizabeth-heiskell-french-onion-sliders-main-190130_1960f6384ba7d2b7e12c5032c3e68ebe.jpg" />
      <Post username="guest3" caption="3rd Times a Charm" imageUrl="https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg" />

    </div>
  );
}

export default App;