import React from 'react'
import './footer.css'
import { PiXLogo } from 'react-icons/pi'
import { ImYoutube } from 'react-icons/im'
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { BiLogoGmail, BiLogoTiktok } from 'react-icons/bi'
import { TfiLinkedin, TfiPinterest } from 'react-icons/tfi'
import { FaLocationDot } from 'react-icons/fa6'
import { TbMailFilled } from 'react-icons/tb'
function Footera() {
  return (
    <>
    
      <div className='footera'>

        <div className='footeraUpside'>
          <div className='footeraUpsideLeft'>
            <h4 className='footerH4'>ABU SUHAIL</h4>
            <p className='footerP1'>Reliable Transportation, Heavy Machinery, Professional Service</p>
          </div>

          <div className='footerLogo'>
            <h5>Contact us</h5>
            <div><span><TbMailFilled /></span>info@rayztechsolutions.com</div>
            <div><span><FaPhoneAlt /></span>+971 50 163 3959</div>
            <div><span><FaLocationDot /></span>Thoban industrial area fujairah United Arab Emirates</div>
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