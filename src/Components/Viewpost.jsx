import React, { useEffect, useState } from 'react'
import "./Viewpost.css";
import axios from 'axios';



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
                  <p >{value.Feed}</p>
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