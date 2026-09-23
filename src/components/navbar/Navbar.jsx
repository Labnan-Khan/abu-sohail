import React, { useEffect, useState } from 'react'
import './navbar.css'
import { RiMenuLine,  RiMenuUnfold4Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
function Navbar() {
    const [showNavbar, setShowNavbar] = useState(true)
    const [lastScroll, setLastScroll] = useState(0)
    const [clickMenu, setClickMenu] = useState(false)
    const [dropMenu, setDropMenu] = useState(false)
    
    
    useEffect(()=>{
        const handleScroll = () =>{
            const curentScroll = window.pageYOffset;

            if (curentScroll <= 0){
                setShowNavbar(true);
                //  lastScroll.current = 0;
                 setLastScroll(0);
                return
            }

            if(curentScroll > lastScroll && curentScroll >50){
                setShowNavbar(false)
            }else {
                setShowNavbar(true)
            }

            setLastScroll(curentScroll)
        }
         window.addEventListener("scroll", handleScroll);
         
        return ()=> window.removeEventListener("scroll", handleScroll)
    },[lastScroll]);


    useEffect(()=>{
        if(dropMenu && window.innerWidth <=768){

            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "auto";
        }

        return ()=>{
            document.body.style.overflow = "auto";
        }
    },[dropMenu])

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth > 768) {
            setDropMenu(false);          // close dropdown when on desktop
            // document.body.style.overflow = "auto"; // restore scroll
        }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <>
    <div className={`nav ${showNavbar ? "show" : "hide"}`} >
        <div className='navName'><Link to="/" >ABU SUHAIL</Link></div>
        <div className='navMenu' onClick={ ()=>{ setClickMenu(!clickMenu); setDropMenu(!dropMenu)} }>{(!clickMenu)?<RiMenuLine /> :<RiMenuUnfold4Line/> } </div>
        
        <div className={clickMenu? "show" : ""} onClick={ ()=>{ setClickMenu(!clickMenu); setDropMenu(!dropMenu)} }></div>
        <ul className={`navLi ${(dropMenu)? " navLiM" : ""}`} onClick={ ()=>{ setClickMenu(!clickMenu); setDropMenu(!dropMenu)} }>
            <li><Link to="/" >Home</Link></li>
            {/* <li><link to="/journal" >Services</link></li> */}
            <li><Link to="/transportation" >Transportaion</Link></li>
            <li><Link to="/heavy-machinery" >Heavy Machinery</Link></li>
            {/* <li><Link to="/projects" >Projects</Link></li> */}
            <li><Link to="/contact" >Contact Us</Link></li>
        </ul>
    </div>



    </>
  )
}

export default Navbar