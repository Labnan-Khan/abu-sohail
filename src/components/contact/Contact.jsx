import React, { useEffect, useRef, useState } from 'react'
import './contact.css'
// import FollowUs from '../FollowUs/FollowUs'
import { PiHandWavingDuotone } from 'react-icons/pi'
import { FaHandPointLeft, FaHandshake } from 'react-icons/fa'
// import emailjs from '@emailjs/browser';
import { IoMdCheckmark } from 'react-icons/io'

function Contact() {
    const[submitBtn, setSubmitBtn] = useState(false)
    const [errors, setErrors] = useState({  userName: false,  companyName: false,  userEmail: false,  firstDropDown: false,});
    const hasError = Object.values(errors).some(Boolean);

    const[userName, setUserName] = useState("")
    const[companyName, setCompanyName] = useState("")
    const[userEmail, setUserEmail] = useState("")
    const[firstDropDown, setFirstDropDown] = useState("")


const form = useRef()



useEffect(() => {
    if (submitBtn === true) {
        const timer = setTimeout(() => {
            setSubmitBtn(false);
        }, 4000);

        return () => clearTimeout(timer);
    }
}, [submitBtn]);


const sendEmail = (e) => {
  e.preventDefault();

  const newErrors = {
  userName: userName.trim() === "",
  companyName: companyName.trim() === "",
  userEmail: userEmail.trim() === "",
  firstDropDown: firstDropDown === "",
};

setErrors(newErrors);

// stop if any error exists
if (Object.values(newErrors).some(err => err)) {
    const formTop = document.getElementById("scrollForm");
    const timer = setTimeout(() => {
        if(formTop){
            const top = formTop.getBoundingClientRect().top +window.scrollY;
            window.scrollTo({ top:top - 100, behavior: "smooth"})
        }
        
        }, 500);

    
    return;
}


    
  // your email logic here
   emailjs.sendForm("service_4rctlan", "template_jywq00z" , form.current, {
        publicKey: "iAcTdkXScDxMzppgd",
    }).then(()=>{
        form.current.reset()
        setUserName("");
        setCompanyName("");
        setUserEmail("");
        setFirstDropDown("");
        setSubmitBtn(true)
}).catch((error)=>{
        console.log("failed")
    })
};


  return (
    <>
    <div className='ContactUs'>
        <h1>Big Projects. Reliable Solutions. Built to Deliver.</h1>
        <p>Whether you need reliable transportation, heavy machinery, or complete project support, our team is ready to help. </p>
        <p>Tell us what you need, and we’ll work with you to provide the right solution, clear guidance, and dependable service from start to finish.</p>
          
            <div className='contactHomeRight' id="scrollForm" >

                <form className='formSec'  ref={form} onSubmit={sendEmail} >
                <input type="text" className={errors.userName? "errorInput" :""} name="user_name"  placeholder='Name' value={userName} onChange={(e)=>{ setUserName(e.target.value); setErrors(prev => ({ ...prev, userName: false }));}}/>
                <input type="text" className={errors.companyName? "errorInput" :""} name="company_name" placeholder='Company Name' value={companyName} onChange={(e)=>{ setCompanyName(e.target.value); setErrors(prev => ({ ...prev, companyName: false }));}}/>
                <input type="email" className={errors.userEmail? "errorInput" :""} name="user_email" placeholder='Email' value={userEmail} onChange={(e)=>{ setUserEmail(e.target.value); setErrors(prev => ({ ...prev, userEmail: false }));}}/>
                <input type="number" className={errors.userEmail? "errorInput" :""} name="user_email" placeholder='Phone number' value={userEmail} onChange={(e)=>{ setUserEmail(e.target.value); setErrors(prev => ({ ...prev, userEmail: false }));}}/>
                <div className='dropdownSec'>
                    <p>How do you get your video editing done?</p>
                    <select id="country" name="user_dropdown1" className={errors.firstDropDown? "errorInput" :""} value={firstDropDown} onChange={(e)=>{ setFirstDropDown(e.target.value); setErrors(prev => ({ ...prev, firstDropDown: false }));}}>
                        <option  value="">please select</option>
                        <option value="I don't">I don't</option>
                        <option value="I do it myself">I do it myself</option>
                        <option value="Freelancer">Freelancer</option>
                        <option value="In-house">In-house</option>
                        <option value="Agency">Agency</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className='dropdownSec'>
                    <p>Which monthly plan feels right for your business needs?</p>
                    <select id="country" name="user_dropdown2">
                        <option value="">please select</option>
                        <option value="$748/month works for me">$748/month works for me</option>
                        <option value="$1,666/month fits my goals">$1,666/month fits my goals</option>
                        <option value="I might need a custom plan">I might need a custom plan</option>
                        <option value="This fells beyond my budget">This fells beyond my budget</option>
                    </select>
                </div>
                
                <textarea type="text" name='message' placeholder='Message' cols="7"></textarea >
                <div className='SubmitBtnDiv'>
                    <button type='submit'  className={`${submitBtn? "MessageSubmite": ""}`}>

                        {(submitBtn)? <span><IoMdCheckmark /></span>  : ""}
                        {(submitBtn)?  "Sent successfully" : "Send Message"}
                        </button>                    
                {/* <div className={`messageDiv ${submitBtn? "messageSubmit": ""}`}>Thank you for your message. It has been sent.</div> */}
                </div>
                {/* <button type='submit' onClick={()=>setSubmitBtn(true)}>Send Message</button> */}
                </form>
                <div className={`hideErrorMeg ${(hasError)? "showErrorMeg": ""}`}>Please fill the Required inputs</div>
                
            </div>
        

    </div>


    </>
  )
}

export default Contact