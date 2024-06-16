'use client'
import { useState } from "react";
import Link from "next/link";
import { Inika } from "next/font/google";
const inika=Inika({subsets:[],weight:['700']});
export  function NavBar() {
   
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (<>
    
        <div className={`navContainer ${inika.className}`}>
            <div className="titleContainer" >    <h5 >Banana exports Inc</h5>  </div>
            <div className="navItemsContainer">
            <div className="sm:hidden flex ">
                <button id="menu-button" onClick={()=>{toggleMenu()}}>
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <ul id="menu" className={`navBar  ${isOpen ? "show" : ""} sm:flex  `}>
                <li className="nav">
                    <Link href="/">Home</Link>
                </li>
                <li className="nav">
                    <Link href="/#about">About Us</Link>
                </li>
                <li className="nav">
                    <Link href="/#service">Service</Link>
                </li>
                <li className="nav">
                    <Link href="/#contactus">Contact Us</Link>
                </li>
            </ul>
            
            </div>
        </div>
    </>)
}
