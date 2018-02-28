import React from 'react'

import Avatar from '../Avatar/Avatar';
import NameWithHandle from '../NameWithHandle/NameWithHandle';
import Time from '../Time/Time'
import Message from '../Message/Message'
import ReplyButton from '../ReplyButton/ReplyButton'
import RetweetButton from '../RetweetButton/RetweetButton'
import LikeButton from '../LikeButton/LikeButton'
import MoreOptionsButton from '../MoreOptionsButton/MoreOptionsButton'

const TwitterTweet = () => {
  return (
    <div className='container'>

      <div className='avatar'>
        <Avatar />
      </div>

      <div className='info'>
        <div className='handleContainer'>
          <NameWithHandle />
          <Time />
        </div>
        
        <Message message= {'Etiam porta sem malesuada magna mollis euismod.'}/>

        <div className='icons'>
          <div><ReplyButton /></div>
          <div><RetweetButton /></div>
          <div><LikeButton /></div>
          <div><MoreOptionsButton /></div>
        </div>
      </div>
    </div>
  );
}

export default TwitterTweet;
