import React, { useState, useEffect } from 'react';
import { Card, Container, CardGroup } from 'react-bootstrap';
import { getPeliculas } from '../shared/api'

const PeliculaCard = (pelicula, id) => (
    <Card style={{ width: '18rem', marginTop: '20px' }} key={id}>
        <Card.Body>
            <Card.Title>{pelicula.Title}</Card.Title>
            <Card.Img src={pelicula.Poster} alt="Poster" />
            <Card.Text>
                Titulo Original: {pelicula.OriginalTitle} <br />
                Rating: {pelicula.Rating} <br />
                Duracion: {pelicula.RunTime}
            </Card.Text>
            <Card.Link href="#">Comprar Boletos</Card.Link>
        </Card.Body>
    </Card>
);

const Peliculas = () => {
    const [peliculas, setPeliculas] = useState(null);

    useEffect(() => {
        getPeliculas().then((response) => {
            setPeliculas(response)
            console.log(response);
        })
            .catch((error) => {
                console.log(error);
            });
    }, [])

    return (
        <Container style={{ marginTop: '40px' }}>
            <h2>Peliculas</h2>
            <CardGroup>
                { peliculas && (
                    peliculas.map((p, id) => PeliculaCard(p, id))
                )}
            </CardGroup>
        </Container>
    )
}

export default Peliculas;
