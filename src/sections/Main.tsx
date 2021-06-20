import logo from '.././logo.svg';
import {Col, Row} from 'react-bootstrap';

const Main = () => {
  return (
    <Row>
      <Col xs={12}>
        <p>MAIN</p>
      </Col>
      <Col xs={12}>
        <img src={logo} className='appLogo' alt='SimpleWeather' />
      </Col>
    </Row>
  );
};

Main.displayName = 'Main';

export default Main;
