import React from 'react';
import '../styles/NavTabs.css';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <header className = "navheader">Maryam Guppy</header>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <ul className="nav nav-tabs">
              <li className="nav-item nav-tab">
                <a
                  href="#about"
                  onClick={() => handlePageChange('About')}
                  // This is a conditional (ternary) operator that checks to see if the current page is "About"
                  // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                  className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                  About
                </a>
              </li>
              <li className="nav-item nav-tab">
                <a
                  href="#projects"
                  onClick={() => handlePageChange('Projects')}
                  // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item nav-tab">
                <a
                  href="#resume"
                  onClick={() => handlePageChange('Resume')}
                  // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                  Resume
                </a>
              </li>
              <li className="nav-item nav-tab">
                <a
                  href="#contact"
                  // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                  onClick={() => handlePageChange('Contact')}
                  className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavTabs;
