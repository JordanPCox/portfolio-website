import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import '../styles/portfolio.scss'

const projects = [
    {
        title: 'Gnocchia',
        description: 'A take on the classic Snake game using pure JavaScript, HTML, and CSS.',
        imageUrl: '../../public/gnocchia.png',
        link: 'https://gnocchia.netlify.app/'
    },
    {
        title: 'Escape Plan',
        description: 'A work-in-progress build of a web application for creating, sharing, and discovering travel itineraries.',
        imageUrl: '../../public/escapeplan.png',
        link: 'http://escapeplan.onrender.com/'
    },
    {
        title: 'TomeTracker',
        description: 'A companion web application for Dungeons & Dragons campaigns.',
        imageUrl: '../../public/tometracker.png',
        link: 'https://tome-tracker.onrender.com/'
    }
]

const Portfolio: React.FC = () => {
    return (
        <Container className="mt-5">
            <h1 className="text-center">My Projects</h1>
            <Row className="mt-4">
                {projects.map((project, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={project.imageUrl} alt={project.title}/>
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                                <Button variant="primary" href={project.link} target="_blank">
                                    View Project
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Portfolio