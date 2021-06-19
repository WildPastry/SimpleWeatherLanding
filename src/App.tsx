// import logo from './logo.svg';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';

const App = () => {
  return (
    <Container fluid>
    <Row>
      <Col>
      <header>
        {/* <img src={logo} className='App-logo' alt='logo' /> */}
      </header>
      </Col>
    </Row>
    </Container>
  );
};

App.displayName = 'App';

export default App;
