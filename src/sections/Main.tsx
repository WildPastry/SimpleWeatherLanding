import logo from '.././logo.svg';
import {Col, Row} from 'react-bootstrap';

const Main = () => {
  return (
    <Row className='my-3'>
      <Col xs={6}>
        <p>MAIN</p>
      </Col>
      <Col xs={6} className='text-center'>
        <img src={logo} className='appLogo' alt='SimpleWeather' />
      </Col>
    </Row>
  );
};

Main.displayName = 'Main';

export default Main;
