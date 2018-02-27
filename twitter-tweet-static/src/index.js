import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import avatar from './avatar.png'
import reply from './reply.png'
import retweet from './retweet.png'
import favorite from './favorite.png'
import threedots from './threedots.png'

function TwitterTweet() {
  return (
    <div className='container'>

      <div className='avatar'>
        <img src={avatar} width='100px' height='100px'/>
      </div>

      <div className='info'>
        <div className='handle'>
          <div className='handle-name'>@dusani</div>
          <div className='elasped-time'>. 3hrs Ago</div>
        </div>
        <div className='message'>Etiam porta sem malesuada magna mollis euismod.</div>
        <div className='symbols'>
          <div><img src={reply} width='40px' height='40px'/></div>
          <div><img src={retweet} width='40px' height='40px'/></div>
          <div><img src={favorite} width='40px' height='40px'/></div>
          <div><img src={threedots} width='40px' height='40px'/></div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<TwitterTweet />, document.getElementById('root'));
