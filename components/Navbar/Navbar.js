import React from 'react'
import { NeonButton } from '../styled/blocks/Button'

const Navbar = () => {
  return (
    <div className='navbar'>
      <NeonButton>Home</NeonButton>
      <NeonButton>About</NeonButton>
      <NeonButton>Profile</NeonButton>
      <NeonButton>Settings</NeonButton>
    </div>
  )
}

export default Navbar
