import React from 'react'
import './Hero.css'; 
import hero_logo from "../Assets/AF_Reviving_Legends_W.png"
import hero_video from '../Assets/AF_VIDEO.mp4';


const Hero = () => {
  return (
    <div className = "hero">
        <div className="overlay"></div>
        <video className='hero_video' src={hero_video} type ='video/mp4' autoPlay loop muted />
        <div className = "landing_section">
            <img className = "hero_logo" src={hero_logo} alt="Antique Fists Logo" />
        </div>
    </div>
  )
}

export default Hero