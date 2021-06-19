import logo from '.././logo.svg';
import {Col, Row} from 'react-bootstrap';

const Main = () => {
  return (
    <Row>
      <Col><p>MAIN</p></Col>
      <Col><img src={logo} alt='SimpleWeather' /></Col>
    </Row>
  );
};

Main.displayName = 'Main';

export default Main;
