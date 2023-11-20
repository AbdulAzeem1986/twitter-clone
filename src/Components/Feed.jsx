import React, { useState } from 'react'
import "./Feed.css"
import Tweetbox from './Tweetbox';
import Viewpost from './Viewpost';
import Feedheader from './Feedheader';



function Feed() {

  return (
    <div className='feed'>

      <Feedheader />
      <Tweetbox />
      <Viewpost />

    </div>
  )
}

export default Feed