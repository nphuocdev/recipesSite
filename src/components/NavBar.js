import { Link } from 'gatsby'
import React,{useState} from 'react'
import {FiAlignJustify} from "react-icons/fi"
import logo from '../assets/images/logo.svg'
//react hook

const NavBar = () => {
  const[show, setShow]= useState(false)
  return (
    <nav className='navbar'>
       <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simply recipes" className="" />
          </Link>
          <button className="nav-btn" onClick={()=>setShow(!show)}>
            <FiAlignJustify/> 
          </button>
        </div>
        <div className={show ? "nav-links show-links":"nav-links"}>
          <Link to='/' className='nav-link'
          activeClassName='active-link'>HOME</Link>
        
          <Link to='/recipes' className='nav-link'
          activeClassName='active-link'>RECIPES</Link>
        
          <Link to='/tags' className='nav-link'
          activeClassName='active-link'>TAGS</Link>
       
          <Link to='/about' className='nav-link'
          activeClassName='active-link'>ABOUT</Link>
        
        <div className='nav-link contact-link'>
        <Link to='/contact' className='btn'
          activeClassName='active-link'>CONTACT</Link>
        </div>
        </div>
        
       </div> 
    </nav>
  )
}

export default NavBar