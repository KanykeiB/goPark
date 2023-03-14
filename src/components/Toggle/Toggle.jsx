import React from 'react'
import './Toggle.css'
import {useState, useEffect} from 'react'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
const Toggle = () => {
    const [theme, setTheme ] = useState(true)
    const style = document.querySelector(":root")
    
    useEffect(() => {
        handleClick(true)
    }, [])

    const handleClick = (str) => {
        setTheme(!theme)
        style.style.setProperty(`--default-back`, `var(${theme ? '--ligth' : '--black'})`)
        style.style.setProperty(`--default-color`, `var(${theme ? '--black-text' : '--white-text'})`)
        style.style.setProperty(`--default-svg`, `var(${theme ? '--darkSvg' : '--lightSvg'})`)
        style.style.setProperty(`--default-arrow`, `var(${theme ? '--darkArrow' : '--lightArrow'})`)
        style.style.setProperty(`--default-shop`, `var(${theme ? '--darkShop' : '--lightShop'})`)
        style.style.setProperty(`--default-language`, `var(${theme ? '--darkLanguage' : '--lightLanguage'})`)
    console.log(theme)}
  return (
    <div className="toggle">
        <div className="test">
        <Moon onClick={() => handleClick()}/>
        <Sun onClick={() => handleClick()}/>
        {/* <Moon onClick={() => handleClick(false)}/> */}
        {/* <Sun onClick={() => handleClick(true)}/> */}
        <div className={theme ? "t-button" : 'r-button'} /> 
            
        </div>
    </div>
  )
}

export default Toggle