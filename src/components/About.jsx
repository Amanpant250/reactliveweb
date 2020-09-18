import React from 'react'
import Common from './Common'
import { NavLink } from 'react-router-dom'
import i2 from '../images/i2.gif'

const About=()=>{
    return(<>
        <Common 
        name="Welcome to About Page" 
        imgsrc={i2} 
        visit="/contact" 
        btname="Contact Now"/>
    </>)
}
export default About