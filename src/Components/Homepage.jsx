import React from 'react';
import "./Homepage.css"
import Sidebar from './Sidebar';
import Feed from "./Feed";
import Services from './Services';




function Homepage() {
  return (
    <div className='home'>
      
       <Sidebar/>
       <Feed/>
       
       
     
      
    </div>
  )
}

export default Homepage