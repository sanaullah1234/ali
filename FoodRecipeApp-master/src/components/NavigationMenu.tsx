import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationMenu:React.FC=()=>{
  return (
    <>
            <nav className='flex justify-center items-center'>
                <div className='md:w-[50%] md:justify-evenly md:py-[12px] md:border-y-2 flex flex-col md:flex-row md:items-center text-xl font-semibold text-[#84BD00]'>
                    <NavLink to='/Home'>Home</NavLink>
                    <NavLink to='/Home'>Explore</NavLink>
                    <NavLink to='/Home'>Help</NavLink>
                    <NavLink to='/Home'>Profile</NavLink>
                </div>
            </nav>

      
    </>
  )
}

export default NavigationMenu
