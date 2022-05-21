import React, { useState } from 'react';
import './header.css';

function Header() {
    const [classesName, updateclassesName] = useState(["header-hamburger-off","header-mobile"]);

  var callupdateclassesName = () => {
    updateclassesName((prevclassesName) =>{ 
    if(prevclassesName[0]=="header-hamburger-off")
      return ["header-hamburger-on","header-pc"];
      return ["header-hamburger-off","header-mobile"];
    });
  };

    return (
        <div id="header">
            <a id="header-logo" href='#'>
                <img src="logo.png" alt="logo" />
                <div className={classesName[0]} onClick={callupdateclassesName}>
                    <div className="hamburger-bar1"></div>
                    <div className="hamburger-bar2"></div>
                    <div className="hamburger-bar3"></div>
                </div>

            </a>

            <div id="header-list" className={classesName[1]}>
                <ul>
                    <li><a>About Us</a></li>
                    <li><a>Announcents</a></li>
                    <li><a>Gallery</a></li>
                    <li><a>Events</a></li>
                    <li><a>People</a></li>
                    <li><a>Contact Us</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;