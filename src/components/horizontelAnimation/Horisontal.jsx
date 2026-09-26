import React from 'react'
import './horsontal.css'

import timg1 from "./timg1.jpeg"
import timg2 from "./timg2.jpeg"
// import timg3 from "./timg3"
import timg4 from "./timg4.jpeg"
import timg5 from "./himg5.jpeg"
import timg6 from "./timg6.jpeg"
import timg7 from "./timg7.jpeg"
import timg8 from "./timg8.jpeg"
import timg9 from "./timg9.jpeg"
import timg10 from "./timg10.jpeg"

import himg1 from './himg1.jpg'
import himg2 from './hImg2.jpg'
import himg3 from './himg3.jpeg'
import himg4 from './himg4.jpeg'
import himg5 from './himg5.jpeg'
import himg6 from './himg6.jpeg'
import himg7 from './himg7.jpeg'
import himg8 from './himg9.jpeg'
import himg9 from './himg10.jpeg'
import himg10 from './himg11.jpeg'

function Horisontal() {
    const transportImgArray = [timg1 ,timg2  ,timg4 ,timg5 ,timg6 ,timg7 ,timg8 ,timg9 ,timg10];
    const machineryImgArray = [himg1 ,himg2  ,himg4 ,himg5 ,himg6 ,himg7 ,himg8 ,himg9 ,himg10];
  return (
    <div>
      <div className='testiBoxSec'>

            <div className='testiTrack'>
                {transportImgArray.map((item,i)=>(
                    <div className='tBox' key={i} style={{ backgroundImage: `url(${item})`}}>
                        
                    </div>
                ))}

                {transportImgArray.map((item,i)=>(
                    <div className='tBox' key={i}  style={{ backgroundImage: `url(${item})`}}>
                        
                    </div>
                ))}
            </div>

            <div className='testiTrack middleSec'>
                {machineryImgArray.map((item,i)=>(
                    <div className='tBox' key={i}  style={{ backgroundImage: `url(${item})`}}>
                        
                    </div>
                ))}

                {machineryImgArray.map((item,i)=>(
                    <div className='tBox' key={i}  style={{ backgroundImage: `url(${item})`}}>
                        
                    </div>
                ))}
            </div>


                 
                    
        </div>
    </div>
  )
}

export default Horisontal
