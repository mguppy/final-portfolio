import React from 'react';
// import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../styles/Projects.css';

export default function Projects() {
    return (

        //Cards for projects
        <>
            <Container className='d-flex vh-100'>
                <Row className="m-auto align-self-center">
                    <Col>
                        <Card>
                            <a href="https://brandonnorsworthy.github.io/pet-seeker/" target="_blank">
                                <Card.Img className="project-photo" variant="top" src="./Images/pet-seeker.png" />
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
                                <Card.Img className="project-photo" variant="top" src="./Images/jobster.png" />
                                <Card.Body>
                                    <Card.Text className="carousel-title">
                                        Jobster Application
                                    </Card.Text>
                                </Card.Body>
                            </a>
                        </Card>
                        <Card>
                            <a href="https://mguppy.github.io/code-quiz/" target="_blank">
                                <Card.Img className="project-photo" variant="top" src="./Images/code-quiz.png" />
                                <Card.Body>
                                    <Card.Text className="carousel-title">
                                        Code Quiz Application
                                    </Card.Text>
                                </Card.Body>
                            </a>
                        </Card>
                        <Card>
                            <a href="https://www.eridium.chat/" target="_blank">
                                <Card.Img className="project-photo" variant="top" src="./Images/eridium.png" />
                                <Card.Body>
                                    <Card.Text className="carousel-title">
                                        Eridium Application
                                    </Card.Text>
                                </Card.Body>
                            </a>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}