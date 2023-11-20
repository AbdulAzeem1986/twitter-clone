import React from 'react'
import "./SidebarItems.css"

function SidebarItems({ active, Icon, text }) {
  return (
    <div className={"sidebaritems"}>

      <Icon />
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarItems