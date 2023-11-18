import React, { useState } from 'react'
import "./Feed.css"
import SettingsIcon from '@material-ui/icons/Settings';
import Tweetbox from './Tweetbox';
import Post from './Post';


function Feed() {

  const [postArray, setPostarray] = useState([]);

  // const username = postArray[0].username
  return (
    <div className='feed'>

      <div className="feed-header">
        <div className="row">
          <div className="col">For you</div>
          <div className="col">Following</div>
          <div className="col settings"><SettingsIcon/></div>
        </div>
      </div>
      <Tweetbox/>
      <Post displayName={"Azeem"}
/>
      
    </div>


  )
}

export default Feed