import React, {  useEffect, useState } from 'react'
import "./Viewpost.css";
import axios from 'axios';



function Viewpost (){

  const [post, setPost] = useState([1,2,3]);
  const [newPostAdded,setNewPostAdded] = useState(false);

  useEffect(()=>{
    setPost([4,5,6])
    postview()
  },[])

  const postview =async ()=>{

  //   var data = {"userId":sessionStorage.getItem("userId")}; 
  try {
    const response = await axios.post("http://localhost:3001/viewpost",{userId:"655919c8aa874793f3f00267"});
    // setPost([1,2,3]);
    setNewPostAdded(!newPostAdded)
    console.log(response.data);
    console.log(post);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

  return (

    <div className="container dash">
      <div className="row">
        <div className="col">
          <div className="row">

            {post.map((value,index)=>{
              return <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
              <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title {value.name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere {value.username}</a>
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