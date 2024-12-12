import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return(
  <header className='flex items-center justify-between py-5'>
    <Link to={"/"}>
    <img src={logo} alt="" />
    </Link>
  </header>
  );
}

export default Navbar