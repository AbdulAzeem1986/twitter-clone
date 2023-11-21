import React, { useEffect, useState } from 'react'
import "./Viewpost.css";
import axios from 'axios';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import EqualizerTwoToneIcon from '@material-ui/icons/EqualizerTwoTone';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';



function Viewpost() {

  var [post, setPost] = useState([]);
  const [newPostAdded, setNewPostAdded] = useState(false);

  useEffect(() => {
    postview()
  }, [])

  const postview = async () => {

    var data = { "userId": sessionStorage.getItem("userId") };
    try {
      const response = await axios.post("http://localhost:3001/viewpost", data);
      setPost(response.data);
      setNewPostAdded(!newPostAdded)
      console.log(response.data);
      console.log(post);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  return (

    <div className="container post-body ">
      <div className="row ">
        <div className="col">
          <div className="row ">

            {post.map((value, index) => {
              return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 post-items">
                
                <div >
                  <div className='postbody-title'>
                    <h5>{value.name}</h5>@<p>{value.username}</p>
                  </div>
                  <div className='myfeeds'>
                  <p>{value.Feed}</p>
                  <div className='icons'>
                  <div className='feeds-icon'><ChatBubbleOutlineRoundedIcon fontSize='inherit'/></div>
                  <div className='feeds-icon'><FavoriteBorderRoundedIcon fontSize='inherit'/></div>
                  <div className='feeds-icon'><EqualizerTwoToneIcon fontSize='inherit'/></div>
                  <div className='feeds-icon'><BookmarkBorderOutlinedIcon fontSize='inherit'/></div>
                  <div className='feeds-icon'><PublishOutlinedIcon fontSize='inherit'/></div>


                  </div>
                  </div>
                </div>
              </div>
            }
            )}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Viewpost