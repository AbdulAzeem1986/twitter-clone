import React from 'react'
import "./Services.css"
import { Avatar } from '@material-ui/core'

// import {
//   TwitterTimelineEmbed,
//   TwitterShareButton,
//   TwitterTweetEmbed,
// } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Services() {
  return (
    <div className="services">
      <div className="services-input">
        <SearchIcon className="services-searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div>
        <h4>Subscribe to Premium</h4>
        <p>Subscribe to unlock new features and if eligible, receive a share of ads revenue</p>
        <button className="btn btn-dark">Subscribe</button>
      </div>
      <div className='Services-follow'>
        <h4>Who to follow</h4>
        <div className='Services-user'>
          <Avatar className='m-2' />
          <p className='m-2'>username</p>
        </div>
        <button className="btn btn-dark">Follow</button>
      </div>

      <div className="services-services">
        <h2>What's happening</h2>
      </div>
    </div>
  )
}

export default Services