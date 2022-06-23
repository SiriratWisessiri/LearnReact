// import React from "react";
import logo from './reactLogo.png'


function Header() {
    return (
      <header>
      <nav className='nav'>
        <img src={logo}></img>
        <h3>React Fact</h3> 
        <h4 className='nav-item'>React Courese - Project1</h4>
      </nav> 
    </header>
    );
  }

  export default Header