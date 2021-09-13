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
                                <Card.Img className="project-photo" variant="top" src="./Images/pet-seeker.png" />
                                <Card.Body>
                                    <Card.Text className="text-center">
                                        <a className="project-btn" href="https://brandonnorsworthy.github.io/pet-seeker/" target="_blank">Deployed Application</a>
                                        <a className="project-btn" href="https://github.com/mguppy/pet-seeker" target="_blank">Code</a>
                                    </Card.Text>
                                </Card.Body>
                        </Card>
                        <br />
                        <Card>
                                <Card.Img className="project-photo" variant="top" src="./Images/jobster.png" />
                                <Card.Body>
                                    <Card.Text className="text-center">
                                        <a className="project-btn" href="https://jobster-group-2.herokuapp.com/aboutus" target="_blank">Deployed Application</a>
                                        <a className="project-btn" href="https://github.com/mguppy/Jobster" target="_blank">Code</a>
                                    </Card.Text>
                                </Card.Body>
                        </Card>
                        <Card>
                                <Card.Img className="project-photo" variant="top" src="./Images/code-quiz.png" />
                                <Card.Body>
                                    <Card.Text className="text-center">
                                        <a className="project-btn" href="https://mguppy.github.io/code-quiz/" target="_blank">Deployed Application</a>
                                        <a className="project-btn" href="https://github.com/mguppy/code-quiz" target="_blank">Code</a>
                                    </Card.Text>
                                </Card.Body>
                        </Card>
                        <Card>
                                <Card.Img className="project-photo" variant="top" src="./Images/eridium.png" />
                                <Card.Body>
                                    <Card.Text className="text-center">
                                        <a className="project-btn" href="https://www.eridium.chat/" target="_blank">Deployed Application</a>
                                        <a className="project-btn" href="https://github.com/mguppy/eridium" target="_blank">Code</a>
                                    </Card.Text>
                                </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}