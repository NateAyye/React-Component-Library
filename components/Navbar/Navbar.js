import React from 'react'
import Button from '/components/styled/elements/Button'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Button glow >Home</Button>
      <Button glow >About</Button>
      <Button glow >Profile</Button>
      <Button glow >Settings</Button>
      <br />
      <Button href='/sign-in'>Sign In</Button>
    </div>
  )
}

export default Navbar
