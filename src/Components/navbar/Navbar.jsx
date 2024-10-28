import React from 'react'
import { RiMenu3Line } from "react-icons/ri";
import logo from '../../Assets/GPT-3.svg'
import './navbar.css'


// BEM == Block Element Modifier ==> Thats How we Name CSS Classes
const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
    <div className='gpt3__navbar-links'>
     <div className='gpt3__navbar-links_logo'>
      <img src={logo} alt="logo" />
     </div>
     <div className='gpt3__navbar-links_container'>
     <p><a href="#home">Home</a></p>
     <p><a href="#wgpt3">What is GPT3</a></p>
     <p><a href="#possibility">Open AI</a></p>
     <p><a href="#features">Case Studies</a></p>
     <p><a href="#blog">Library</a></p>
     </div>
    </div>
    </div>
  )
}

export default Navbar