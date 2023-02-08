import React from 'react'
import ProgressBar from "../components/styled/elements/ProgressBar";
const about = () => {
  return (
    <div style={{background: '#e3edf7', color: '#333', height: 100 + 'vh', display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
      <ProgressBar progress={30} />
    </div>
  )
}



export default about
