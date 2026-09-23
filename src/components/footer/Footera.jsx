import React from 'react'
import './footer.css'
import { PiXLogo } from 'react-icons/pi'
import { ImYoutube } from 'react-icons/im'
import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import { BiLogoGmail, BiLogoTiktok } from 'react-icons/bi'
import { TfiLinkedin, TfiPinterest } from 'react-icons/tfi'
function Footera() {
  return (
    <>
    
      <div className='footera'>

        <div className='footeraUpside'>
          <div className='footeraUpsideLeft'>
            <h4 className='footerH4'>ABU ABU SUHAIL</h4>
            <p className='footerP1'>Reliable Transportation, Heavy Machinery, Professional Service</p>
          </div>

          <div className='footerLogo'>
            <div className='logoSec' >
              <h5>Contact us through email</h5>
              <p>email: info@rayztechsolutions.com</p>
              


            </div>
            
          </div>
        </div>

          <div className='footerDown'>
            <div className='downSection'>
            <p>© 2026 ABU SUHAIL All Rights Reserved</p>
            <div>
              <p>Privacy Policy</p>
              <p>Terms</p>
              <p>Refund Policy</p>
            </div>
          </div>
          </div>
        </div>
    
    
    
    </>
  )
}

export default Footera