import React from 'react';
import { Container, Button } from 'react-bootstrap';
import '../../App.css';

const Header = () => (
  <Container className="App-header">
    <h2>Front End Estudy Group</h2>
    <h4>Java script demo</h4>
    <div style={{ width: '100%' }}>
      <a href="/home">
        <Button className="float-end" variant="secondary">Home</Button>
      </a>
    </div>
  </Container>
);

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
  <div>
    <Header />
    <Container>
      {children}
    </Container>
  </div>
);

export default Layout;
