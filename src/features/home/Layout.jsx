import React from 'react';
import Container from 'react-bootstrap/Container';
import '../../App.css';


const Header = () => (
    <Container className="App-header">
        <h2>Front End Estudy Group</h2>
        <h4>Java script demo</h4>
    </Container>
);

const Layout = ({ children }) => (
    <div>
        <Header />
        <Container>
            {children}
        </Container>

    </div>
)

export default Layout;