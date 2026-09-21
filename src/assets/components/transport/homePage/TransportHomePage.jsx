import React from 'react'
import './transportHome.css'
import { IoMdCheckmark } from 'react-icons/io'
import { FaBoxes, FaCheckCircle, FaClipboardList, FaCogs, FaFileInvoiceDollar, FaHeadset, FaMapMarkerAlt, FaProjectDiagram, FaRoute, FaShieldAlt, FaTools, FaTruck, FaTruckLoading, FaUserTie } from 'react-icons/fa'
import { GiTruck } from 'react-icons/gi'
import { BsTruckFlatbed } from 'react-icons/bs'
function TransportHomePage() {
  return (
    <div className='transportHomePage'>

        <div className='heroSection'>
            <h5>TRANSPORTATION Solutions</h5>
            <h1>Moving Your <br />Business <span>Forward</span></h1>
            <p>Reliable transportation solutions built around safety, efficiency, and dependable delivery.</p>
            <div className='heroBtn'>
                <button>Request a Quote</button>
                <button>Explore Our Fleet</button>
            </div>
            <div className='herSecDiv'>
                <span>Reliable</span>
                <span>Professional</span>
                <span>On Time</span>
            </div>
            <div className='heroFoter'>
                <div>
                    <span>20+</span>
                    <p>Years Experience</p>
                </div>
                <div>
                    <span>100+</span>
                    <p>Fleet Vehicles</p>
                </div>
                <div>
                    <span>500+</span>
                    <p>Projects Completed</p>
                </div>
                <div>
                    <span>Nationwide</span>
                    <p>Coverage</p>
                </div>
            </div>
        </div>

        <div className='whoWeAre'>
            <h5>Who We Are</h5>
            <h1>Transportation Built Around <span>Your Business</span></h1>
            <p>
                We provide dependable transportation solutions designed to keep businesses,
                projects, and supply chains moving. From everyday deliveries to complex
                transportation requirements, our team focuses on safety, efficiency, and
                reliable service from pickup to final delivery.
            </p>

            <div className='wItemSec'>
                <div className='WImg'></div>
                <div className='wRightSec'>
                    <h2>Moving What Matters to Your Business.</h2>
                    <p>Reliable people, dependable equipment, and professional transportation services.</p>
                    <div>
                        <span><IoMdCheckmark /></span>
                        <p>Experienced Team</p>
                    </div>
                    <div>
                        <span><IoMdCheckmark /></span>
                        <p>Reliable Fleet</p>
                    </div>
                    <div>
                        <span><IoMdCheckmark /></span>
                        <p>Safety-Focused Operations</p>
                    </div>
                    <div>
                        <span><IoMdCheckmark /></span>
                        <p>Professional Service</p>
                    </div>
                    <div>
                        <button>Discover Our Story</button>
                    </div>
                </div>
            </div>

                


        </div>

        <div className='whatWeDo'>
            <h5>What We Do</h5>
            <h1>Transportation <span>Solutions</span> for Every Requirement.</h1>
            <p>Reliable transportation solutions for different cargo, routes, and business needs.</p>

            <div className='weDoSec'>
                <div>
                    <span><FaTruck /></span>
                    <h3>Goods Transportation</h3>
                    <p>Cargo transportation and logistics.</p>
                </div>

                <div>
                    <span><FaBoxes /></span>
                    <h3>Cargo Transportation</h3>
                    <p>Cargo transportation and management.</p>
                </div>
                <div>
                    <span><BsTruckFlatbed /></span>
                    <h3>Heavy Transport</h3>
                    <p>Heavy transport and specialized operations.</p>
                </div>
                <div>
                    <span><FaProjectDiagram /></span>
                    <h3>Project Logistics</h3>
                    <p>Transportation logistics and equipment.</p>
                </div>
                <div>
                    <span><FaRoute /></span>
                    <h3>Long-Distance Transport</h3>
                    <p>Transportation and cargo.</p>
                </div>
                <div>
                    <span><FaMapMarkerAlt /></span>
                    <h3>Local Transportation</h3>
                    <p>Local transportation and logistics.</p>
                </div>

                <div>
                    <h3>Transportation Services Designed for Safe and Efficient Delivery</h3>
                    <p>We provide dependable transportation solutions tailored to your cargo, project, and operational needs, with a focus on safety, efficiency, and on-time delivery.</p>
                    <button>Our Services</button>
                </div>

            </div>

        </div>

        <div className='ourFleet'>
            <h5>Our Fleet</h5>
            <h1>The Right Equipment <br />for <span>Every Load</span></h1>
            <p>Reliable vehicles and equipment for different loads and transportation needs.</p>

            <div className='ourFleetSec'>

                <div className='ourfleetItem'>
                    <div></div>
                    <h3>Heavy-Duty Truck</h3>
                    <p>Specifications: 9000 mm, Specifications: 5000 mm</p>
                    
                </div>

                <div  className='ourfleetItem'>
                    <div></div>
                    <h3>Trailer</h3>
                    <p>Specification: 1100 mm, Specification: 600 mm</p>
                    
                </div>

                <div className='ourfleetItem'>
                    <div></div>
                    <h3>Flatbed Truck</h3>
                    <p>Specification: 9100 mm, Specification: 2000 kg</p>
                    
                </div>

                <div className='ourfleetItem'>
                    <div></div>
                    <h3>Container Carrier</h3>
                    <p>Specification: 1000 mm, Specification: 6000 kg</p>
                    
                </div>

                <div className='ourfleetItem'>
                    <h3>Equipment Built for the Job.</h3>
                    <p>Choose the right equipment for your cargo and project requirements.</p>
                    <button>Explore More</button>
                </div>
            </div>

        </div>

        <div className='WhyChooseUs'>
            <div className='wcuTopSec'>
                <div className='topSecImg'></div>
                <div>
                    <h1>Built on <span>Reliability</span>. <br /> Driven by <span>Experience</span>.</h1>
                    <p>Experienced people, reliable equipment, and a safety-focused approach.</p>
                </div>

            </div>

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

        <div className='howWeWork'>
            <h5>How We Work</h5>
            <h1>Simple Process. Reliable Results.</h1>
            <p>A clear and efficient process from planning to final delivery.</p>

            <div>
                <div>
                    <span><FaClipboardList /></span>
                    <h4>Tell Us Your Requirement</h4>
                </div>
                <div>
                    <span><FaFileInvoiceDollar /></span>
                    <h4>Plan & Get Your Quote</h4>
                </div>
                <div>
                    <span><FaTruckLoading /></span>
                    <h4>Pickup & Transport</h4>
                </div>
                <div>
                    <span><FaCheckCircle /></span>
                    <h4>Safe & Reliable Delivery</h4>
                </div>
            </div>
        </div>

        <div className='project'>
            <h5>Projects</h5>
            <h1>Where Transportation <br /> Meets <span>Performance</span></h1>
            <p>Real transportation solutions supporting businesses and major projects.</p>
            <div className='projectSec'>
                <div className='projectItem'>
                    <div></div>
                    <h3>Industrial Transportation</h3>
                    <p>Reliable transport for industrial equipment and materials.</p>
                </div>
                <div  className='projectItem'>
                    <div></div>
                    <h3>Construction Logistics</h3>
                    <p>Efficient logistics for construction materials and equipment.</p>
                </div>
                <div className='projectItem'>
                    <div></div>
                    <h3>Heavy Cargo Movement</h3>
                    <p>Safe transportation for heavy and oversized cargo.</p>
                </div>
                <div className='projectItem'>
                    <div></div>
                    <h3>Industrial Transportation</h3>
                    <p>Reliable transport for industrial equipment and materials.</p>
                </div>
                <div  className='projectItem'>
                    <div></div>
                    <h3>Construction Logistics</h3>
                    <p>Efficient logistics for construction materials and equipment.</p>
                </div>
                <div className='projectItem'>
                    
                    <h3>Heavy Cargo Movement</h3>
                    <p>Safe transportation for heavy and oversized cargo.</p>
                    <button>Explore Project</button>
                </div>
            </div>

        </div>

        <div className='Coverage'>
            <h5>Coverage</h5>
            <h1>Moving Across the Region.</h1>
            <p>Wherever your project takes you, we're ready to move with it.</p>
            <div></div>

            {/* <div>
                <h1>Supporting Businesses That Keep Moving.</h1>
                <p>Transportation services supporting businesses across multiple industries.</p>
                <div>
                    <div>
                        <span></span>
                        <p>Construction</p>
                    </div>
                    <div>
                        <span></span>
                        <p>Manufacturing</p>
                    </div>
                    <div>
                        <span></span>
                        <p>Industrial</p>
                    </div>
                </div>
            </div> */}
        </div>
        
        <div className='homeContactUs'>
            <h1>READY TO MOVE YOUR  <span>NEXT PROJECT</span>?</h1>
            <p>Let’s discuss your transportation requirements and work together to find a safe, reliable, and efficient solution tailored to the specific needs of your next project.</p>
            <button>Contact Us</button>
        </div>

    </div>
  )
}

export default TransportHomePage
