import React from 'react'
import { NavLink } from 'react-router-dom'
import i1 from '../images/i1.gif'
import Common from './Common'

const Home=()=>{
    return(<>
        <Common 
        name="Grow your Business with" 
        imgsrc={i1} 
        visit="/service" 
        btname="Get Started"/>
    </>)
}
export default Home