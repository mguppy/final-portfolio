import React from 'react';
// import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import '../styles/Projects.css';

export default function Projects() {
    return (
        //   <div id = "projects">
        //     <img className="project-photo" src="./Images/pet-seeker.png" alt="Pet Seeker" />  
        //     <section id = "about-section">
        //     <h1 className = "section-title">Pet Seeker</h1>
        //     <p id = "about-me-paragraph">
        //     I'm Maryam Guppy and I am currently a student in the University of Texas boot camp studying the MERN
        //     stack. I graduated from the University of Arkansas with a degree in Information Systems. Once I
        //     graduated, I moved to Kansas City and worked for a company called Cerner, where I was an
        //     implementation consultant. I later took an IT Audit job in Austin and have been in the audit field
        //     for over 5 years. After much consideration, I have decided to switch my career focus to be more
        //     technical and am really looking forward to finding a job in the Web Development field!
        //     </p>
        //     </section>
        //   </div>
        // <Carousel class="carousel slide z-depth-1-half" data-interval="false">
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100 project-photo"
        //             // style={{ width: "95%"}}
        //             src="./Images/pet-seeker.png"
        //             alt="Pet Seeker Application"
        //         />
        //         <Carousel.Caption>
        //             <section className = "carousel">
        //             <h3 className = "carousel-title">Pet Seeker Application</h3>
        //             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //             </section>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //             className="d-block w-100 project-photo"
        //             // style={{ width: "100%", height: "100%"}}
        //             src="./Images/jobster.png"
        //             alt="Jobster Application"
        //         />

        //         <Carousel.Caption>
        //             <h3>Jobster Application</h3>
        //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        // </Carousel>
        
        //Cards for projects
        <>
            <Card>
            <a href="https://brandonnorsworthy.github.io/pet-seeker/" target="_blank">
                <Card.Img className = "project-photo" variant="top" src="./Images/pet-seeker.png" />
                <Card.Body>
                    <Card.Text className="carousel-title">
                        Pet Seeker Application
                    </Card.Text>
                </Card.Body>
                </a>
            </Card>
            <br />
            <Card>
            <a href="https://jobster-group-2.herokuapp.com/aboutus" target="_blank">
                <Card.Img className = "project-photo" variant="top" src="./Images/jobster.png" />
                <Card.Body>
                    <Card.Text className="carousel-title">
                        Jobster Application
                    </Card.Text>
                </Card.Body>
                </a>
            </Card>
            <Card>
            <a href="https://mguppy.github.io/code-quiz/" target="_blank">
                <Card.Img className = "project-photo" variant="top" src="./Images/code-quiz.png" />
                <Card.Body>
                    <Card.Text className="carousel-title">
                        Code Quiz Application
                    </Card.Text>
                </Card.Body>
                </a>
            </Card>
            <Card>
            <a href="https://budget-tracker-maryam-uta.herokuapp.com/budg" target="_blank">
                <Card.Img className = "project-photo" variant="top" src="./Images/budget-tracker.png" />
                <Card.Body>
                    <Card.Text className="carousel-title">
                        Budget Tracker Application
                    </Card.Text>
                </Card.Body>
                </a>
            </Card>
            <Card>
            <a href="https://workout-tracker-maryam-uta.herokuapp.com/" target="_blank">
                <Card.Img className = "project-photo" variant="top" src="./Images/workout-tracker.png" />
                <Card.Body>
                    <Card.Text className="carousel-title">
                        Workout Tracker Application
                    </Card.Text>
                </Card.Body>
                </a>
            </Card>
            <Card>
            <a href="https://note-taker-maryam-uta.herokuapp.com/" target="_blank">
                <Card.Img className = "project-photo" variant="top" src="./Images/note-taker.png" />
                <Card.Body>
                    <Card.Text className="carousel-title">
                        Note Taker Application
                    </Card.Text>
                </Card.Body>
                </a>
            </Card>
        </>
    );
}