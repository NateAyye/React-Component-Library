import React from 'react'
import Button from '/src/components/styled/elements/Button'


const Navbar = () => {


  return (
    <div className='navbar'>
      <Button transparent activated href='/' >Home</Button>
      <Button transparent activated href='/about' >About</Button>
      <Button transparent href={'/profile'} >Profile</Button>
      <Button transparent >Settings</Button>
      <br />
      <Button transparent activated href='/sign-in'>Sign In</Button>
    </div>
  )
}

export default Navbar
