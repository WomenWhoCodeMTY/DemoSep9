import React, { useState, useEffect } from 'react';
import { Card, Container, CardGroup } from 'react-bootstrap';
import { getCines } from '../shared/api';

const CineCard = (cine, id) => (
  <Card style={{ width: '18rem', marginTop: '20px' }} key={id}>
    <Card.Body>
      <Card.Title>{cine.Nombre}</Card.Title>
    </Card.Body>
  </Card>
);

const Peliculas = () => {
  const [cines, setCines] = useState(null);

  useEffect(() => {
    getCines().then((response) => {
      setCines(response);
      console.log(response);
    })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container style={{ marginTop: '40px' }}>
      <h2>Cines</h2>
      <CardGroup>

      </CardGroup>
    </Container>
  );
};

export default Peliculas;
