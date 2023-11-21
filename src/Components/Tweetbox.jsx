import React, { useState } from 'react'
import "./Tweetbox.css"
import { Avatar } from '@material-ui/core'
import BrokenImageOutlinedIcon from '@material-ui/icons/BrokenImageOutlined';
import GifSharpIcon from '@material-ui/icons/GifSharp';
import FormatListBulletedSharpIcon from '@material-ui/icons/FormatListBulletedSharp';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import ScheduleOutlinedIcon from '@material-ui/icons/ScheduleOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

import axios from 'axios';

function Tweetbox() {

  const [feed, setFeed] = useState("");

  const [data, setData] = useState("");

  const inputHandler = (event) => {
    setFeed(event.target.value)
    setData({
      token: sessionStorage.getItem("token"),
      name: sessionStorage.getItem("name"),
      username: sessionStorage.getItem("username"),
      userId: sessionStorage.getItem("userId"),
      Feed: feed
    })
  }

  const addPost = () => {
    console.log(data)
    axios.post("http://localhost:3001/addpost", data)
      .then((response) => {
        console.log(response.data)
        if (response.data.Status == "Post added successfully") {
          // alert("Successfully added the Post")
          setData(
            {
              name: sessionStorage.getItem("name"),
              username: sessionStorage.getItem("username"),
              userId: sessionStorage.getItem("userId"),
              Feed: ""
            }
          )
        } else {
          alert("Error")
        }
      })
      .catch((err) => {
        console.log(err)
      })
  };

  return (
    <div className='tweetBox'>
      <form>
        <div className="tweetBox--input">
          <Avatar />
          <input onChange={inputHandler} type="text" placeholder="What's happening?" />
        </div>

        <div className='tweetbox-icons'>
          <span><BrokenImageOutlinedIcon/></span>
          <span><GifSharpIcon/></span>
          <span><FormatListBulletedSharpIcon/></span>
          <span><ScheduleOutlinedIcon/></span>
          <span><SentimentSatisfiedOutlinedIcon/></span>
          <span><RoomOutlinedIcon/></span>
          
       
        <button onClick={addPost} className='btn btn-primary postbtn'>Post</button>
        </div>
      </form>

    </div>
  )
}

export default Tweetbox