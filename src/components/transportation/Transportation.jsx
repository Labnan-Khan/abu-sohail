import React, { useEffect, useRef, useState } from 'react'
import './transportation.css'

import himg1 from './himg1.jpeg'
import himg2 from './himg2.jpeg'
import himg3 from './himg3.avif'
import himg4 from './himg4.webp'
import himg5 from './himg5.jpg'
import himg6 from './himg6.jpeg'
import himg7 from './himg7.jpeg'
import himg8 from './himg8.jpeg'
import himg9 from './himg9.jpg'
import himg10 from './himg10.jpeg'
import himg11 from './himg11.jpg'
import himg12 from './himg12.webp'

function Transportaion() {
    const [videoSize, setVideoSize] = useState(false)
    const [currentCatageryBtn, setCurrentCatageryBtn] =useState(0)
    
const allcateg = [{name:"All categories", details:""}]

const machinery = [
    {
        name: "Heavy Trucks",
        img: himg1
    },
    {
        name: "Cargo Trucks",
        img: himg2
    },
    {
        name: "Trailer Trucks",
        img: himg3
    },
    {
        name: "Flatbed Trucks",
        img: himg4
    },
    {
        name: "Lowbed Trailers",
        img: himg5
    },
    {
        name: "Tanker Trucks",
        img: himg6
    },
    {
        name: "Dump Trucks",
        img: himg7
    },
    {
        name: "Tipper Trucks",
        img: himg8
    },
    {
        name: "Container Trucks",
        img: himg9
    },
    {
        name: "Car Carrier Trucks",
        img: himg10
    },
    {
        name: "Pickup Trucks",
        img: himg11
    },
    {
        name: "SUVs",
        img: himg12
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





        <h4 className='projectH4'>Transportation Solutions That Move Business</h4>
        <p className='projectP1'>From heavy cargo and construction materials to everyday loads, our versatile fleet delivers dependable transportation solutions with efficiency, safety, and on-time service.</p>

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
    

    {/* <FollowUs /> */}
    {/* <Testimonial /> */}
    </>
  )
}

export default Transportaion