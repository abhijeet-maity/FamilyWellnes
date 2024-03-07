import React from 'react';
import NavItem from './NavItem.jsx';
import '../App.css';

const NavBar = () => {
  return (
      <div className='navbar'>
        <NavItem text="HOME"/>
        <NavItem text="ABOUT"/>
        <NavItem text="SERVICES"/>
        <NavItem text="F&Q"/>
        <NavItem text="CONTACT"/>
      </div>
  )
}

export default NavBar