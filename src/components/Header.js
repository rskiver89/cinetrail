import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import "../styles/Header.css"
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { ThemeContext } from '../context/ThemeContext';

function Header() {
  let navigate = useNavigate()
    const {darkMode, setDarkMode}=useContext(ThemeContext);

    const handleTheme=()=> {
      setDarkMode(!darkMode)
      localStorage.setItem('darkMode')
    }


  return (
    <div className={darkMode ? "header-container" : "header-container header-light"}>

     <Link className="logo" to="/">CineTrail</Link>
     <div className="search-container">
        <input className="search-input" placeholder="Search movies..."></input>
     </div>

     <div className="header-buttons-container">
     <div className="theme-button-container">

        {   
      darkMode
      ? <div className="theme-buttons">
      <MdOutlineLightMode onClick={handleTheme} className="theme-icon "/>
      <MdOutlineNightlight  className="theme-icon theme-icon-active"/>
      
      </div>
      : <div className="theme-buttons">
      <MdOutlineLightMode  className="theme-icon theme-icon-active"/>
      <MdOutlineNightlight  onClick={handleTheme} className="theme-icon"/>
      
      </div>
        }
        
     </div>
     </div>

     <div>
        <button className="create-account-btn" onClick={()=>navigate('/signup')}>Create Account</button>
     </div>
    </div>
  )
}

export default Header
