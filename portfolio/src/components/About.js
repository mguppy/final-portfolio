import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <div id = "about">
      <img className="portfolio-photo" src="./Images/portfolio-pic.jpeg" alt="maryam" />  
      <section id = "about-section">
      <h1 className = "section-title">About Me</h1>
      <p id = "about-me-paragraph">
      I'm Maryam Guppy and I am currently a student in the University of Texas boot camp studying the MERN
      stack. I graduated from the University of Arkansas with a degree in Information Systems. Once I
      graduated, I moved to Kansas City and worked for a company called Cerner, where I was an
      implementation consultant. I later took an IT Audit job in Austin and have been in the audit field
      for over 5 years. After much consideration, I have decided to switch my career focus to be more
      technical and am really looking forward to finding a job in the Web Development field!
      </p>
      </section>
    </div>
  );
}