import React, {  useEffect, useState } from 'react'
import "./Viewpost.css";
import axios from 'axios';


function Viewpost (){

  const[post, setPost] = useState([]);

  useEffect(()=>{
    postview()
  },[])

  const postview = ()=>{
    var data = {"userId":sessionStorage.getItem("userId")};
  //   // console.log(data);
     
    axios.get("http://localhost:3001/viewpost",data)
    .then((response)=>{
      setPost(response);
    console.log(response.data)
        }
      )
      .catch((err)=>{
        console.log(err)
      })
      }

  return (

    <div className="container dash">
      <div className="row">
        <div className="col">
          <div className="row">

            {/* {post.map((value,index)=>{
              return <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4"> */}
              <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            {/* }) */}
          {/* } */}
          </div>
        </div>
      </div>
  )
};

export default Viewpost