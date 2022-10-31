import React from 'react'
import "./EmailList.css"
import { Checkbox, IconButton } from '@mui/material'

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
        </div>
      </div>
    </div>
  )
}

export default EmailList