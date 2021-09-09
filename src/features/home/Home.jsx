import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Home = () => {
    return (
        <Container style={{ marginTop: '40px' }}>
            <h2>Home</h2>
            <Card style={{ width: '18rem', marginTop: '20px' }}>
                <Card.Body>
                    <Card.Title>Cines</Card.Title>
                    <Card.Text>
                        Ver cines disponibles
                    </Card.Text>
                    <Card.Link href="/cines">Cines</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem', marginTop: '20px' }}>
                <Card.Body>
                    <Card.Title>Peliculas</Card.Title>
                    <Card.Text>
                        Ver Peliculas disponibles
                    </Card.Text>
                    <Card.Link href="/peliculas">Peliculas</Card.Link>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Home;
