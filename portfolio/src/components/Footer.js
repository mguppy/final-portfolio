import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
          <div>
            <div className="py-2 text-center footer-style">
              © MARYAM GUPPY &nbsp; {new Date().getFullYear()}
              <ul>
        |             <a href="#"> (501)952-5221 </a>
        |             <a href="#"> mguppy34@gmail.com </a>
        |              <a href="https://github.com/mguppy"target="_blank"><img src="./Images/GitHub-icon.png" alt="GitHub" id="github-icon"/></a>
        |             <a href="https://www.linkedin.com/in/maryam-guppy-85ba2726/"target="_blank"><img src="./Images/linked-in.png" alt="LinkedIn" id="linkedin-icon"/></a>
                 </ul>
            </div>
          </div>
                );
  };

export default Footer;