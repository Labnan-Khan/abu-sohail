import React, { useState } from 'react'
import './transportHome.css'
import { IoMdCheckmark } from 'react-icons/io'
import { FaChevronLeft, FaChevronRight, FaCogs, FaHeadset, FaShieldAlt, FaTools, FaTruck, FaUserTie } from 'react-icons/fa'

import CountUpAnimation from '../CountUpAnimation'
import Horisontal from '../horizontelAnimation/Horisontal'

import whyimg1 from '../../assets/whyimg1.avif'
import whyimg2 from '../../assets/whyimg2.avif'
import whyimg3 from '../../assets/whyimg3.jpg'
import whyimg4 from '../../assets/whyimg4.jpg'
import whyimg5 from '../../assets/whyimg5.jpg'
import whyimg6 from '../../assets/whyimg6.avif'
import { Link } from 'react-router-dom'

function TransportHomePage() {

const projectData = [
    {
        heading: "Earthmoving & Excavation",
        para: "Excavation, digging, earth removal and site preparation for demanding construction and infrastructure projects.",
        img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec"
    },
    {
        heading: "Heavy Equipment Transport",
        para: "Safe movement of excavators, loaders, bulldozers and other heavy machinery to and from project sites.",
        img: "https://images.unsplash.com/photo-1580901368919-7738efb0f87e"
    },
    {
        heading: "Road Construction Support",
        para: "Grading, leveling, compaction and material movement supporting road and infrastructure development.",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd"
    },
    {
        heading: "Land Clearing & Preparation",
        para: "Clearing, leveling and preparing construction and development areas with suitable heavy machinery.",
        img: "https://images.unsplash.com/photo-1751054619908-65d27a503ce8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        heading: "Heavy Cargo Movement",
        para: "Transportation of oversized equipment, industrial cargo and heavy loads using suitable trailers and trucks.",
        img: "https://images.unsplash.com/photo-1760684412367-a32afa986ae0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        heading: "Material Handling",
        para: "Loading, shifting and handling soil, aggregates and construction materials across project sites.",
        img: "https://images.unsplash.com/photo-1551830820-330a71b99659"
    },
    {
        heading: "Lowbed & Flatbed Logistics",
        para: "Specialized transportation solutions for heavy and oversized machinery requiring secure project delivery.",
        img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c"
    },
    {
        heading: "Bulk Material Transport",
        para: "Reliable movement and delivery of soil, aggregates and other suitable bulk construction materials.",
        img: "https://images.unsplash.com/photo-1772852309223-9ebeecf3ebf8?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        heading: "Site Grading & Leveling",
        para: "Precision grading and leveling for construction sites, roads and infrastructure development.",
        img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122"
    },
    {
        heading: "Project Logistics Support",
        para: "Coordinated machinery and transportation support for construction, infrastructure and heavy-equipment projects.",
        img: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492"
    },
    {
        heading: "Construction Site Support",
        para: "Combined machinery, material handling and transportation support for active construction operations.",
        img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
    }
];

const ServicesData = {

    transportationItem: [
        {
            itemHeading: "Heavy Transport & Specialized Haulage",
            itemArray: [
                "Heavy Haulage & Abnormal Load Transportation",
                "Oversized & Overweight Equipment Haulage",
                "Heavy Plant & Machinery Transportation",
                "Low-Bed & Multi-Axle Trailer Transportation",
                "Specialized Project Cargo Haulage",
                "Breakbulk & Out-of-Gauge Cargo Transportation",
                "Industrial Equipment Relocation & Haulage",
                "Construction Plant Mobilization & Demobilization",
                "Inter-Project Machinery Transfer",
                "Heavy Lift & Specialized Transport Logistics"
            ]
        },
        {
            itemHeading: "Tipper / Bulk Material Services",
            itemArray: [
                "Bulk Earthwork Haulage",
                "Tipper-Based Material Transportation",
                "Aggregates & Excavated Material Haulage",
                "Spoil Removal & Disposal Logistics",
                "Quarry Material Transportation",
                "Sand, Gravel & Aggregate Haulage",
                "Construction Waste & Spoil Transportation",
                "Bulk Fill Material Logistics"
            ]
        }
    ],

    machineryItem: [
        {
            itemHeading: "Civil & Earthworks",
            itemArray: [
                "Bulk Earthworks & Mass Excavation",
                "Cut-and-Fill Operations",
                "Site Grading & Formation Preparation",
                "Earthmoving & Subgrade Preparation",
                "Excavation, Trenching & Soil Removal",
                "Embankment Construction & Formation Works",
                "Land Reclamation & Terrain Development",
                "Rock Excavation & Controlled Earth Removal",
                "Right-of-Way Clearance & Site Preparation",
                "Subgrade Stabilization & Ground Improvement"
            ]
        },
        {
            itemHeading: "Heavy Machinery & Plant Operations",
            itemArray: [
                "Excavator & Hydraulic Plant Operations",
                "Crawler Dozer & Track Plant Operations",
                "Wheel Loader & Material Handling Operations",
                "Motor Grader & Precision Grading",
                "Soil Compaction & Densification Works",
                "Backfilling & Engineered Fill Placement",
                "Plant-Based Earthmoving Operations",
                "Heavy Plant Deployment & Site Operations",
                "Construction Equipment Mobilization",
                "Specialized Plant & Machinery Deployment"
            ]
        },
        {
            itemHeading: "Road & Infrastructure Works",
            itemArray: [
                "Road Formation & Pavement Preparation",
                "Subgrade & Subbase Construction",
                "Road Widening & Earth Formation",
                "Aggregate Placement & Spreading",
                "Compaction & Pavement Foundation Works",
                "Bulk Material Handling & Placement",
                "Infrastructure Corridor Development",
                "Access Road Construction & Formation",
                "Civil Infrastructure Earthworks",
                "Utility Corridor & Right-of-Way Works"
            ]
        }
    ]

};
const [serviesCategory, setServiesCategory] = useState("transportationItem");
const [subCategoryIndex, setSubCategoryIndex] = useState(0); 


const handlePrevSubCategory = () => {
    setSubCategoryIndex((prev) => {
        if (prev === 0) {
            return ServicesData[serviesCategory].length - 1;
        }

        return prev - 1;
    });
};

const handleNextSubCategory = () => {
    setSubCategoryIndex((prev) => {
        if (prev === ServicesData[serviesCategory].length - 1) {
            return 0;
        }

        return prev + 1;
    });
};


  return (
    <div className='transportHomePage'>

        <div className='heroSection'>
            <div className='herobgImg'></div>
            <h1>Moving Your Business Forward</h1>
            <p>Reliable transportation solutions built around safety, efficiency, and dependable delivery.</p>
            
            <div className='heroBtn'>
                <Link to={"/contact"}><button>Contact Us</button></Link>
                <Link to={"/transportation"}><button>Transportation</button></Link>
            </div>
            
            <div className='heroFoter'>
                <div>
                    <span>{<CountUpAnimation end={20}/>} +</span>
                    <p>Years of Experience</p>
                </div>
                <div>
                    <span>{<CountUpAnimation end={500}/>} +</span>
                    <p>Fleet Vehicles</p>
                </div>
                <div>
                    <span>{<CountUpAnimation end={100}/>} +</span>
                    <p>Projects Completed</p>
                </div>
                <div>
                    <span>{<CountUpAnimation end={500}/>} +</span>
                    <p>Business Partners</p>
                </div>
            </div>

            
            
        </div>

        <div className='whoWeAre'>
            <h1>Built to Move What Builds the Future</h1>
            <p>Reliable transportation and heavy equipment solutions built to support your projects from start to finish.</p>
            
            <div className='wItemSec'>

                <div className='categoryBtnSec'>
                    <h4 className={`${(serviesCategory == "transportationItem")? "activeCategory " : ""}`}>TRANSPORTATION</h4>
                    <div onClick={()=>{setSubCategoryIndex(0); (serviesCategory == "transportationItem")? setServiesCategory("machineryItem") : setServiesCategory("transportationItem")}}>
                        <span className={`${(serviesCategory != "transportationItem")? "right" : ""}`}></span>
                    </div>
                    <h4 className={`${(serviesCategory != "transportationItem")? "activeCategory " : ""}`}>HEAVY MACHINERY</h4>
                </div>

                

                <div className='wRightSec'>
                    <h2>{ServicesData[serviesCategory][subCategoryIndex].itemHeading}</h2>
                    {ServicesData[serviesCategory][subCategoryIndex].itemArray.map((item,itex) =>{
                        return <div>
                                    {/* <span><IoMdCheckmark /></span> */}
                                    <p>{item} </p>
                                </div>
                    })}

                    <div className='leftrightBtnSec'>

                        <span onClick={ handleNextSubCategory}><FaChevronRight /></span>
                        <span onClick={ handlePrevSubCategory}><FaChevronLeft /></span>

                    </div>
                </div>
                
            </div>

                


        </div>

        <div className='ourFleet'>
            <h1>The Right Equipment <br />for <span>Every Load</span></h1>
            <p>Reliable vehicles and equipment for different loads and transportation needs.</p>
            
            <div className='ourFleetSec'>

                 <Horisontal />
            </div>

        </div>        

        {/* <div className='whatWeDo'>
            <h5>What We Do</h5>
            <h1>Transportation <span>Solutions</span> for Every Requirement.</h1>
            <p>Reliable transportation solutions for different cargo, routes, and business needs.</p>

            <div className='weDoSec'>
                <div>
                    <h3>Goods Transportation</h3>
                </div>

                <div>
                    <h3>Cargo Transportation</h3>
                </div>
                <div>
                    <h3>Heavy Transport</h3>
                </div>
                <div>
                    <h3>Project Logistics</h3>
                </div>
                <div>
                    <h3>Long-Distance Transport</h3>
                </div>
                <div>
                    <h3>Local Transportation</h3>
                </div>

                <div>
                    <h3>Transportation Services Designed for Safe and Efficient Delivery</h3>
                    <p>We provide dependable transportation solutions tailored to your cargo, project, and operational needs, with a focus on safety, efficiency, and on-time delivery.</p>
                    <button>Our Services</button>
                </div>

            </div>

        </div> */}
        <div className='whatWeDo'>
    

    <h1>Engineering Solutions That Move Projects Forward </h1>

    <p>
        From transportation to heavy machinery, we provide dependable
        solutions designed around your project, cargo, and operational needs.
    </p>

    <div className='weDoSec'>
        <div style={{ backgroundImage: `url(${whyimg1})`}}>
            <h3>Reliable Transportation</h3>
            {/* <p>Safe and dependable transport for local, long-distance, and project requirements.</p> */}
        </div>

        <div style={{ backgroundImage: `url(${whyimg2})`}}>
            <h3>Heavy Machinery</h3>
            {/* <p>Powerful and capable machinery ready to support demanding construction and earth-moving projects.</p> */}
        </div>

        <div style={{ backgroundImage: `url(${whyimg3})`}}>
            <h3>Experienced Operations</h3>
            {/* <p>Professional handling and practical experience for efficient project execution.</p> */}
        </div>

        <div style={{ backgroundImage: `url(${whyimg4})`}}>
            <h3>Safety First</h3>
            {/* <p>We prioritize safe transportation, equipment handling, and responsible operations.</p> */}
        </div>

        <div style={{ backgroundImage: `url(${whyimg5})`}}>
            <h3>On-Time Service</h3>
            {/* <p>Dependable scheduling and delivery to help keep your projects running smoothly.</p> */}
        </div>

        <div style={{ backgroundImage: `url(${whyimg6})`}}>
            <h3>Flexible Solutions</h3>
            {/* <p>Services tailored to your cargo, machinery, project scope, and operational requirements.</p> */}
        </div>

        <div>
            <h3>Built to Move. Equipped to Deliver.</h3>
            <p>
                We bring transportation and heavy machinery solutions together
                to support construction, infrastructure, logistics, and
                project-based requirements.
            </p>
            <Link to={"/heavy-machinery"}><button>Our Heavy Machinery</button></Link>
        </div>
    </div>
        </div>

        <div className='project'>
            {/* <h5>Projects</h5> */}
            <h1>Where Transportation <br /> Meets <span>Performance</span></h1>
            <p>Real transportation solutions supporting businesses and major projects.</p>
            <div className='projectSec'>

                


                {projectData.map((item, index) => (
                    <div className="projectItem" key={index}>
                        <div style={{backgroundImage: `url(${item.img})`}}> </div>
                        <h3>{item.heading}</h3>
                        <p>{item.para}</p>
                    </div>
                ))}


                
                <div className='projectItem'>
                    
                    <h3>Heavy Cargo Movement</h3>
                    <p>Safe transportation for heavy and oversized cargo.</p>
                    <Link to={"/contact"}><button>Let's Connect</button></Link>
                </div>

            </div>

        </div>



        <div className='WhyChooseUs'>
            
            <h1>Built on <span>Reliability</span>. <br /> Driven by <span>Experience</span>.</h1>
            <p>Experienced people, reliable equipment, and a safety-focused approach.</p>
                

            <div className='secSecdiv'>
                
                <div>
                    <span><FaTruck /></span>
                    <h3>Reliable Delivery</h3>
                    <p>Reliable transportation solutions for safe and timely delivery.</p>
                </div>

                <div>
                    <span><FaUserTie /></span>
                    <h3>Experienced Drivers</h3>
                    <p>Experienced drivers & experienced crew.</p>
                </div>

                <div>
                    <span><FaTools /></span>
                    <h3>Well-Maintained Fleet</h3>
                    <p>Well-maintained and efficient fleet.</p>
                </div>

                <div>
                    <span><FaShieldAlt /></span>
                    <h3>Safety First</h3>
                    <p>Professional & safety-first systems, quality and service.</p>
                </div>

                <div>
                    <span><FaCogs /></span>
                    <h3>Flexible Solutions</h3>
                    <p>Flexible, reliable solutions to meet customer needs.</p>
                </div>

                <div>
                    <span><FaHeadset /></span>
                    <h3>Professional Support</h3>
                    <p>Professional support and professional expertise.</p>
                </div>
            </div>
        </div>


        

        {/* <div className='Coverage'>
            <h5>Coverage</h5>
            <h1>Moving Across the Region.</h1>
            <p>Wherever your project takes you, we're ready to move with it.</p>
            <div></div>

        </div> */}
        
        {/* <div className='homeContactUs'>
            <h1>READY TO MOVE YOUR  <span>NEXT PROJECT</span>?</h1>
            <p>Let’s discuss your transportation requirements and work together to find a safe, reliable, and efficient solution tailored to the specific needs of your next project.</p>
            <Link to={"/contact"}><button>Contact Us</button></Link>
        </div> */}

    </div>
  )
}

export default TransportHomePage
