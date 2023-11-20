import React from 'react'
import "./Feedheader.css"
import SettingsIcon from '@material-ui/icons/Settings';

function Feedheader() {
  return (
    <div>
      <div className="feed-header">
        <div className="row">
          <div className="col"><button>For you</button></div>
          <div className="col"><button>Following</button></div>
          <div className="col settings"><button><SettingsIcon /></button></div>
        </div>
      </div>
    </div>
  )
}

export default Feedheader