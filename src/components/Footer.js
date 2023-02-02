import React, {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '../styles/Footer.css'

function Footer() {
    const {darkMode, setDarkMode}=useContext(ThemeContext);
  return (
    <div className={darkMode ? "footer-container" : "footer-container footer-light"}>
        All rights reserved.
    </div>
  )
}

export default Footer
