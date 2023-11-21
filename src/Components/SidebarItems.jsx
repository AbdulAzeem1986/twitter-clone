import React from 'react'
import "./SidebarItems.css"

function SidebarItems({ Icon, text }) {
  return (
    <div className={"sidebaritems"}>

      <Icon />
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarItems