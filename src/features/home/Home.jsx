import React from 'react';
import { Card, Container } from 'react-bootstrap';

const menuArray = [
  {
    Titulo: 'Cines',
    Descripcion: 'Ver cines disponibles',
    Link: '/cines',
    Visible: true,
  },
  {
    Titulo: 'Peliculas',
    Descripcion: 'Ver Peliculas disponibles',
    Link: '/peliculas',
    Visible: true,
  },
  {
    Titulo: 'Proximos Estrenos',
    Descripcion: 'Proximas Peliculas disponibles',
    Link: '#',
    Visible: false,
  },
];

const displayCard = (elemento, id) => {
  // ejemplo de deconstruccion de objetos en javascript
  const { Titulo, Descripcion, Link } = elemento;
  return (
    <Card style={{ width: '18rem', marginTop: '20px' }} key={id}>
      <Card.Body>
        <Card.Title>{Titulo}</Card.Title>
        <Card.Text>
          {Descripcion}
        </Card.Text>
        <Card.Link href={Link}>{elemento.Titulo}</Card.Link>
      </Card.Body>
    </Card>
  );
};

const Home = () => (
  <Container style={{ marginTop: '40px' }}>
    <h2>Home</h2>
    { menuArray.filter(x => x.Visible).map((objeto, id) => displayCard(objeto, id)) }
  </Container>
);

export default Home;
