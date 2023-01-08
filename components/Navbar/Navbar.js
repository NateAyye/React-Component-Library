import React, { useEffect } from 'react'
import Button from '/components/styled/elements/Button'


const Navbar = () => {


  return (
    <div className='navbar'>
      <Button transparent activated href='/' >Home</Button>
      <Button transparent activated href='/about' >About</Button>
      <Button transparent >Profile</Button>
      <Button transparent >Settings</Button>
      <br />
      <Button transparent activated href='/sign-in'>Sign In</Button>
    </div>
  )
}

export default Navbar
