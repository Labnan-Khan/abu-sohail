import React from 'react'
import "./selectBussines.css"
import { FaArrowRight } from 'react-icons/fa'
function SlectBussnes() {
  return (
    <div className='selectone'>
      <div className='slectoneLogo'></div>
      <h4><span></span>One company. Two specialized businesses</h4>
      <h1>Welcome to <span>Abu Suhail</span></h1>
      <h2>Explore Our specialized businesses</h2>

      <div className='selectSec'>
        <div>
            <h3>TRANSPORTATION</h3>
            {/* <p>Reliable transport & logistics</p> */}
            <button><span><FaArrowRight /></span></button>
        </div>

        <div>
            <h3>HEAVY MACHINERY</h3>
            {/* <p>Powerful equipment for demanding work</p> */}
            <button> <span><FaArrowRight /></span></button>
        </div>
      </div>
      
    </div>
  )
}

export default SlectBussnes
