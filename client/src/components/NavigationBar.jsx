import React from 'react'
import { NavLink } from 'react-router-dom'

function NavigationBar() {
  return (
    <div className='px-10 py-5 flex items-center justify-between text-white'>
      <div className='text-2xl'>Connections</div>

      <div className='flex gap-10 uppercase font-mono px-5 py-3 rounded backdrop-blur-3xl' >
        <NavLink to='/' className={(e) => e.isActive ? 'border-b-2 transition-all' : ''} >Home</NavLink>
        <NavLink to='/profile' className={(e) => e.isActive ? 'border-b-2 transition-all' : ''}>Profile</NavLink>
        <NavLink to='/post' className={(e) => e.isActive ? 'border-b-2 transition-all' : ''} >Post</NavLink>
        <NavLink to='/register' className={(e) => e.isActive ? 'border-b-2 transition-all' : ''}>Signup</NavLink>
      </div>
    </div>
  )
}

export default NavigationBar