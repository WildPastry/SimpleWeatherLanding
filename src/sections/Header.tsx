import {Col, Row} from 'react-bootstrap';

const Header = () => {
  return (
    <Row className='my-3'>
      <Col xs={12}><p>HEADER</p></Col>
    </Row>
  );
};

Header.displayName = 'Header';

export default Header;
