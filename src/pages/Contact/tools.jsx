import React from 'react'
import './tools.css'
import ToolsUsed from  './ToolsUsed/toolsUsed'

const tools = () => {
  return (
    <div className="tools">
      <div className='tools-title'>
        <h1>Materiales mas utilizados</h1>
      </div>
      <div className='tools-dates'>
        <ToolsUsed/>
      </div>
    </div>
  )
}

export default tools