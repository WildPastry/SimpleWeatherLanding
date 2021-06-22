import {Col, Row} from 'react-bootstrap';

const Header = () => {
  return (
    <Row className='my-3'>
      <Col xs={12}><h1>SIMPLEWEATHER</h1></Col>
    </Row>
  );
};

Header.displayName = 'Header';

export default Header;
