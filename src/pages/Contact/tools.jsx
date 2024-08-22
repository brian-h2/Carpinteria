import React from 'react'
import './tools.css'
import ToolsUsed from  './ToolsUsed/toolsUsed'
import {Fade} from "react-awesome-reveal";


const tools = () => {
  return (
  <Fade>
    <div className="tools">
      <div className='tools-title'>
        <h1>Materiales mas utilizados</h1>
      </div>
      <div className='tools-dates'>
        <ToolsUsed/>
      </div>
    </div>
  </Fade>
  )
}

export default tools