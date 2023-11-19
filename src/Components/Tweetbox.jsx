import React, { useState } from 'react'
import "./Tweetbox.css"
import { Avatar } from '@material-ui/core'
import axios from 'axios';

function Tweetbox() {

  const[feed,setFeed]=useState("");

  const [data, setData]= useState("")

  const inputHandler = (event)=>{
    setFeed(event.target.value)
    setData({
      token:sessionStorage.getItem("token"),
      name:sessionStorage.getItem("name"),
      username:sessionStorage.getItem("username"),
      userId:sessionStorage.getItem("userId"),
      Feed:feed
    })
}

  const addPost =()=>{
    console.log(data)
    axios.post("http://localhost:3001/addpost",data)
    .then((response)=>{
      console.log(response.data)
      if (response.data.Status=="Post added successfully") {
        alert("Successfully added the Post")
        setData(
          { name:sessionStorage.getItem("name"),
            username:sessionStorage.getItem("username"),
            userId:sessionStorage.getItem("userId"),
            Feed:""}
        )
      } else {
        alert("Error")
      }
    })
  .catch((err)=>{
    console.log(err)
  })
  };

  return (
    <div className='tweetBox'>
        <form>
            <div className="tweetBox--input">
            <Avatar src='https://images.app.goo.gl/VyD9jTQsKFEiVyeM9' />
            <input onChange={inputHandler} type="text" placeholder="What's happening?" />
            </div>
            <button onClick={addPost} className='btn btn-primary postbtn'>Post</button>
        </form>

    </div>
  )
}

export default Tweetbox