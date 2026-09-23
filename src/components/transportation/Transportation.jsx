import React, { useEffect, useRef, useState } from 'react'
import './transportation.css'
import { FaPause, FaPlay, FaPlayCircle, FaRegWindowClose } from 'react-icons/fa'
import { IoIosPlay, IoMdClose } from 'react-icons/io'
// import Testimonial from '../testimonial/Testimonial'
// import AOS from "aos";
// import "aos/dist/aos.css";
import { GiPlayButton } from 'react-icons/gi'
import { GoUnmute } from 'react-icons/go'
import { ImVolumeHigh, ImVolumeMute2 } from 'react-icons/im'
import { FaCirclePlay } from 'react-icons/fa6'
import { HiMiniPlay } from 'react-icons/hi2'


function Transportaion() {
    const [videoSize, setVideoSize] = useState(false)
    const [currentCatageryBtn, setCurrentCatageryBtn] =useState(0)
    
const allcateg = [{name:"All categories", details:""}]

const machinery = [
    {
        name: "Excavator",
        details: "Powerful earthmoving equipment designed for digging, trenching, demolition, and material handling across demanding job sites."
    },
    {
        name: "Bulldozer",
        details: "Heavy-duty machinery built for pushing, grading, clearing, and leveling large volumes of soil and construction materials."
    },
    {
        name: "Wheel Loader",
        details: "Versatile loading equipment used for moving, loading, and transporting aggregates, soil, debris, and other materials."
    },
    {
        name: "Backhoe Loader",
        details: "Multi-purpose equipment combining digging and loading capabilities for construction, excavation, utility, and roadwork."
    },
    {
        name: "Motor Grader",
        details: "Precision grading machinery used to create smooth, level surfaces for roads, foundations, drainage, and site preparation."
    },
    {
        name: "Dump Truck / Tipper",
        details: "High-capacity hauling vehicles designed to transport and unload soil, gravel, sand, rock, and construction materials efficiently."
    },
    {
        name: "Road Roller / Compactor",
        details: "Specialized equipment used to compact soil, asphalt, and aggregate surfaces for strong and durable road construction."
    },
    {
        name: "Crane / Mobile Crane",
        details: "Heavy lifting equipment designed to safely move and position large materials, machinery, and structural components on-site."
    },
    {
        name: "Skid Steer Loader",
        details: "Compact and highly maneuverable equipment ideal for loading, excavation, site clearing, and work in confined construction areas."
    },
    {
        name: "Telehandler",
        details: "Flexible lifting machinery with an extendable boom, designed for moving materials to elevated or difficult-to-reach locations."
    },
    {
        name: "Forklift",
        details: "Reliable material-handling equipment used to lift, move, and organize heavy loads across warehouses, yards, and construction sites."
    },
    {
        name: "Rock Breaker / Hydraulic Breaker",
        details: "High-impact attachment designed for breaking concrete, rocks, foundations, and other hard materials during demanding projects."
    }
];

    // useEffect(() => {
    //     AOS.init({duration: 2000,
    //          once: false,
    //          offset:0,
    //         anchorPlacement: 'top-bottom'});
    // }, []);
// handle scoll when video open

   

  





// const selectedCategory = videoTypeListBtn[currentCatageryBtn] // it will be used

// const filteredVideos =
//   selectedCategory === "All categories"
//     ? videosData
//     : videosData.filter((item) =>
//         item.categories.includes(selectedCategory)
//       );


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

            {machinery.map((item,index)=>{
                return  (
                  <div key={index} className="videoCon"  >
                    {/* <div className='videoTumbnail'  style={{ backgroundImage: `url(${item.thumbnail})` }}  > */}
                    <div className='videoTumbnail'>
                      
                    </div>
                    <div className='itemDetailSec'>
                        <h4>{item.name}</h4>
                      </div>
                  </div>
                )
            })}
            
           
            

            
            
        </div>


    </div>
    

    {/* <FollowUs /> */}
    {/* <Testimonial /> */}
    </>
  )
}

export default Transportaion