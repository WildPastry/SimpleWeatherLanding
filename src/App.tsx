import React from 'react';
import logo from './logo.svg';
import {Container, Row, Col} from 'react-bootstrap';
import './scss/main.scss';

const App = () => {
  return (
    <Container fluid>
    <Row>
      <Col>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      </Col>
    </Row>
    </Container>
  );
};

App.displayName = 'App';

export default App;
