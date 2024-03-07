import React from 'react';
import '../App.css';
import NavBar from './NavBar';

const Header = () => {
  return (
    <div id='header-section'>
        <div id='header'>
            <h1>Family Wellness</h1>
            <p>MASSAGE THERAPY</p>
        </div>
        <NavBar/>
    </div>
  )
}

export default Header