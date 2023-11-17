import React from 'react';
import "./Homepage.css"
import Sidebar from './Sidebar';
import Feed from "./Feed";




function Homepage() {
  return (
    <div className='homepage'>
      
       <Sidebar/>
       <Feed/>
       
     
      
    </div>
  )
}

export default Homepage