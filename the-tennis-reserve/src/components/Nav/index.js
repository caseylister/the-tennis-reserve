import React from 'react';
import logo from '../../assets/logo.png'

function Nav() {
    
      const handleClick = () => {
        console.log("click handled")
      }

  return (
    <header data-testid="header" className="flex-row px-1">
        <h2>
            <a href="/">
                <img src={logo} alt="tennis reserve logo" width="70"></img>
            </a>
        </h2>
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about" onClick={() => handleClick()}>
                        About Us
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#gallery" onClick={() => handleClick()}>
                         Gallery
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#contact" onClick={() => handleClick()}>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Nav;