import React from 'react'
import './machienryHome.css'
import { IoMdCheckmark } from 'react-icons/io'
import {
  FaBoxes,
  FaCheckCircle,
  FaClipboardList,
  FaCogs,
  FaFileInvoiceDollar,
  FaHeadset,
  FaMapMarkerAlt,
  FaProjectDiagram,
  FaRoute,
  FaShieldAlt,
  FaTools,
  FaTruck,
  FaTruckLoading,
  FaUserTie
} from 'react-icons/fa'
import { BsTruckFlatbed } from 'react-icons/bs'

function MachienryHomePage() {
  return (
    <div className='machinHomePage'>

        <div className='heroSection'>
            <h1>POWERING THE PROJECTS <br />THAT <span>MOVE THE WORLD.</span></h1>
            <p>
                Reliable heavy machinery and equipment solutions built to handle demanding
                construction, infrastructure, and earth-moving projects.
            </p>

            <div className='heroBtn'>
                <button>Contact Us</button>
                <button>See Projects</button>
            </div>

            <div className='herSecDiv'>
                <span>POWER</span>
                <span>PERFORMANCE</span>
                <span>RELIABILITY</span>
            </div>

            <div className='heroFoter'>
                <div>
                    <span>20+</span>
                    <p>Years of Experience</p>
                </div>
                <div>
                    <span>100+</span>
                    <p>Machines & Equipment</p>
                </div>
                <div>
                    <span>500+</span>
                    <p>Projects Supported</p>
                </div>
                <div>
                    <span>24/7</span>
                    <p>Operational Support</p>
                </div>
            </div>
        </div>

        <div className='whoWeAre'>
            
            <h1>BUILT FOR THE <span>TOUGHEST JOBS.</span></h1>
            <p>
                We provide dependable heavy machinery and equipment solutions for
                construction, earth-moving, infrastructure, and industrial projects.
            </p>

            <div className='btnSection'>
                    <span>Experienced Team</span>
                    <span>Reliable Equipment</span>
                    <span>Safety-Focused Operations</span>
                    <span>Professional Support</span>
            </div>

            <div className='wItemSec'>
                <div className='WImg'></div>

                <div className='wRightSec'>

                    <h2>Reliable Equipment for Demanding Projects.</h2>
                    <p>
                        Experienced teams, dependable machinery, and professional support
                        built around the requirements of your project.
                    </p>

                    <div>
                        <button>ABOUT OUR COMPANY</button>
                    </div>
                </div>
            </div>
        </div>

        <div className='whatWeDo'>
            <h1>COMPLETE MACHINERY <span>SOLUTIONS.</span></h1>
            <p>
                Reliable machinery and operational support designed around demanding
                construction, earth-moving, and infrastructure requirements.
            </p>

            <div className='weDoSec'>

                <div>
                    <span><FaTruck /></span>
                    <h3>Heavy Machinery Rental</h3>
                    <p>
                        High-performance equipment available for short and long-term
                        project needs.
                    </p>
                </div>

                <div>
                    <span><FaBoxes /></span>
                    <h3>Equipment Deployment</h3>
                    <p>
                        Fast, reliable mobilization of specialized earth-moving machinery
                        to site.
                    </p>
                </div>

                <div>
                    <span><BsTruckFlatbed /></span>
                    <h3>Earth-Moving Operations</h3>
                    <p>
                        Comprehensive site clearance, excavation, and bulk earth-moving
                        execution.
                    </p>
                </div>

                <div>
                    <span><FaProjectDiagram /></span>
                    <h3>Construction Site Support</h3>
                    <p>
                        Full operational support and machinery coordination for complex
                        job sites.
                    </p>
                </div>

                <div>
                    <span><FaRoute /></span>
                    <h3>Equipment Maintenance</h3>
                    <p>
                        On-site technical support, preventive maintenance, and continuous
                        service.
                    </p>
                </div>

                <div>
                    <span><FaMapMarkerAlt /></span>
                    <h3>Project Machinery Solutions</h3>
                    <p>
                        Tailored equipment fleet planning according to project
                        specifications.
                    </p>
                </div>

                <div>
                    <h3>Machinery Solutions Built Around Your Project.</h3>
                    <p>
                        We provide dependable equipment, deployment, and operational
                        support to help demanding projects stay productive and on track.
                    </p>
                    <button>OUR SERVICES →</button>
                </div>

            </div>
        </div>

        <div className='ourFleet'>
            <h5>OUR EQUIPMENT</h5>
            <h1>THE MACHINES <br />BEHIND THE <span>WORK.</span></h1>
            <p>
                Powerful equipment built to handle demanding earth-moving, construction,
                infrastructure, and industrial operations.
            </p>

            <div className='ourFleetSec'>

                <div className='ourfleetItem'>
                    <div></div>
                    <h3>Excavators</h3>
                    <p>
                        Powerful excavation equipment built for demanding earth-moving
                        operations.
                    </p>
                </div>

                <div className='ourfleetItem'>
                    <div></div>
                    <h3>Bulldozers</h3>
                    <p>
                        Heavy bulldozers built for tough terrain clearance and grading
                        operations.
                    </p>
                </div>

                <div className='ourfleetItem'>
                    <div></div>
                    <h3>Wheel Loaders</h3>
                    <p>
                        Efficient wheel loaders built for high-capacity material handling
                        and transport.
                    </p>
                </div>

                <div className='ourfleetItem'>
                    <div></div>
                    <h3>Dump Trucks</h3>
                    <p>
                        Heavy-duty haulers engineered for high-volume site transportation.
                    </p>
                </div>

                <div className='ourfleetItem'>
                    <div></div>
                    <h3>Motor Graders</h3>
                    <p>
                        Precision grading equipment designed for optimal roadbed
                        preparation.
                    </p>
                </div>

                <div className='ourfleetItem'>
                    <div></div>
                    <h3>Road Rollers</h3>
                    <p>
                        Industrial rollers built for reliable site compaction and
                        surfacing.
                    </p>
                </div>

                <div className='ourfleetItem'>
                    <h3>EQUIPMENT THAT WORKS AS HARD AS YOUR PROJECT.</h3>
                    <p>
                        Explore equipment selected for demanding project requirements,
                        from excavation and grading to material handling and compaction.
                    </p>
                    <button>VIEW EQUIPMENT →</button>
                </div>

            </div>
        </div>

        <div className='WhyChooseUs'>
                    <h1>
                        POWERFUL EQUIPMENT. <br />
                        PROFESSIONAL<span> EXECUTION.</span>
                    </h1>
                    <p>
                        Dependable machinery, experienced operators, and professional
                        coordination focused on safe and efficient project execution.
                    </p>
               

            <div className='secSecdiv'>

                <div>
                    <span><FaTruck /></span>
                    <h3>Reliable Machinery</h3>
                    <p>
                        Dependable heavy equipment built to support demanding project
                        requirements.
                    </p>
                </div>

                <div>
                    <span><FaUserTie /></span>
                    <h3>Experienced Operators</h3>
                    <p>
                        Experienced operators focused on professional and efficient
                        machinery operations.
                    </p>
                </div>

                <div>
                    <span><FaTools /></span>
                    <h3>Well-Maintained Equipment</h3>
                    <p>
                        Properly maintained machinery prepared for demanding working
                        conditions.
                    </p>
                </div>

                <div>
                    <span><FaShieldAlt /></span>
                    <h3>Safety-Focused Operations</h3>
                    <p>
                        A safety-focused approach across equipment operation and project
                        support.
                    </p>
                </div>

                <div>
                    <span><FaCogs /></span>
                    <h3>Flexible Project Support</h3>
                    <p>
                        Equipment and support solutions adapted to different project
                        requirements.
                    </p>
                </div>

                <div>
                    <span><FaHeadset /></span>
                    <h3>Professional Coordination</h3>
                    <p>
                        Clear coordination and dependable support throughout your project.
                    </p>
                </div>

            </div>
        </div>


        <div className='project'>
            <h1>MACHINERY <br />IN <span>ACTION.</span></h1>
            <p>
                Machinery solutions supporting construction, infrastructure, earth-moving,
                and industrial development projects.
            </p>

            <div className='projectSec'>

                <div className='projectItem'>
                    <div></div>
                    <h3>Infrastructure Development</h3>
                    <p>
                        <strong>Equipment Used:</strong> Heavy Excavator, Wheel Loader
                    </p>
                    <p>
                        Major excavation and earth-moving support for large infrastructure
                        expansion.
                    </p>
                </div>

                <div className='projectItem'>
                    <div></div>
                    <h3>Earth-Moving Project</h3>
                    <p>
                        <strong>Equipment Used:</strong> Bulldozers, Dump Trucks
                    </p>
                    <p>
                        Complete site clearing, leveling, and site preparation for
                        industrial site development.
                    </p>
                </div>

                <div className='projectItem'>
                    <div></div>
                    <h3>Road Construction</h3>
                    <p>
                        <strong>Equipment Used:</strong> Motor Graders, Road Rollers
                    </p>
                    <p>
                        Precision grading and roadbed compaction for highway extension
                        projects.
                    </p>
                </div>

                <div className='projectItem'>
                    <div></div>
                    <h3>Construction Projects</h3>
                    <p>
                        Heavy machinery support for demanding construction and earth-moving
                        requirements.
                    </p>
                </div>

                <div className='projectItem'>
                    <div></div>
                    <h3>Industrial Projects</h3>
                    <p>
                        Reliable equipment deployment and site support for industrial
                        development.
                    </p>
                </div>

                <div className='projectItem'>
                    <h3>SUPPORTING PROJECTS THAT BUILD OUR FUTURE.</h3>
                    <p>
                        From infrastructure development to earth-moving operations, our
                        machinery is ready for demanding project environments.
                    </p>
                    <button>VIEW PROJECTS →</button>
                </div>

            </div>
        </div>

        <div className='Coverage'>
            <h1>SUPPORTING THE PROJECTS <br />THAT BUILD OUR <span>FUTURE.</span></h1>
            <p>
                Our machinery solutions support demanding projects across construction,
                infrastructure, road development, mining, earthworks, and industrial
                operations.
            </p>

            <div></div>
        </div>

        <div className='homeContactUs'>
            <h1>READY TO POWER YOUR <span>NEXT PROJECT</span>?</h1>
            <p>
                Tell us about your project and equipment requirements. Our team will help
                identify the right machinery solution.
            </p>
            <button>REQUEST A QUOTE →</button>
        </div>

    </div>
  )
}

export default MachienryHomePage