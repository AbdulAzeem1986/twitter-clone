import React from 'react'
import "./Feedheader.css"
import SettingsIcon from '@material-ui/icons/Settings';

function Feedheader() {
  return (
    <div>
         <div className="feed-header">
        <div className="row">
          <div className="col">For you</div>
          <div className="col">Following</div>
          <div className="col settings"><SettingsIcon/></div>
        </div>
      </div>
    </div>
  )
}

export default Feedheader