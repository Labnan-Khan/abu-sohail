import React, { useEffect, useRef, useState } from 'react'
import './heavymachinery.css'

import timg1 from "./timg1.jpeg"
import timg2 from "./timg2.jpeg"
import timg3 from "./timg3.avif"
import timg4 from "./timg4.jpg"
import timg5 from "./timg5.jpeg"
import timg6 from "./timg6.jpeg"
import timg7 from "./timg7.jpeg"
import timg8 from "./timg8.jpeg"
import timg9 from "./timg9.jpeg"
import timg10 from "./timg10.jpeg"
import timg11 from "./timg11.jpeg"
import timg12 from "./timg12.jpeg"

function HeavyMachinery() {
    const [videoSize, setVideoSize] = useState(false)
    const [currentCatageryBtn, setCurrentCatageryBtn] =useState(0)
    
const allcateg = [{name:"All categories", details:""}]

const machinery =[
    {
        name: "Excavator",
        img: timg1
    },
    {
        name: "Bulldozer",
        img: timg2
    },
    {
        name: "Wheel Loader",
        img: timg3
    },
    {
        name: "Backhoe Loader",
        img: timg4
    },
    {
        name: "Motor Grader",
        img: timg5
    },
    {
        name: "Dump Truck / Tipper",
        img: timg6
    },
    {
        name: "Road Roller / Compactor",
        img: timg7
    },
    {
        name: "Crane / Mobile Crane",
        img: timg8
    },
    {
        name: "Skid Steer Loader",
        img: timg9
    },
    {
        name: "Telehandler",
        img: timg10
    },
    {
        name: "Forklift",
        img: timg11
    },
    {
        name: "Rock Breaker / Hydraulic Breaker",
        img: timg12
    }
]

const filteredMachinery =
    currentCatageryBtn === 0
        ? machinery
        : machinery.filter(
            (item, index) => index === currentCatageryBtn - 1
        )


  return (
    <>
    
    <div className='project'>





        <h4 className='projectH4'>Powering Every Major Project</h4>
      <p className='projectP1'> Explore our range of heavy machinery, engineered for strength, efficiency, and dependable performance across demanding job sites.</p>


        <div className='ProjectVideoTypeBtn'>
            {[...allcateg, ...machinery].map((btn,index) =>{
                return <button key={index} className={`${(currentCatageryBtn == index)?  "currentCatagerybutton" : ""}`} onClick={()=>{setCurrentCatageryBtn(index)}}>{btn.name}</button>
            })}
            
        </div>

        <div className='projectVideoBox'>

            {filteredMachinery.map((item,index)=>{
                return  (
                  <div key={index} className="videoCon"  >
                    <div className='videoTumbnail'  style={{ backgroundImage: `url(${item.img})` }}  >
                    {/* <div className='videoTumbnail'> */}
                      
                    </div>
                    <div className='itemDetailSec'>
                        <h4>{item.name}</h4>
                      </div>
                  </div>
                )
            })}
            
           
            

            
            
        </div>


    </div>
    

    </>
  )
}

export default HeavyMachinery