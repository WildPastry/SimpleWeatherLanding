import {Col, Row} from 'react-bootstrap';

const Header = () => {
  return (
    <Row>
      <Col xs={12}><p>HEADER</p></Col>
    </Row>
  );
};

Header.displayName = 'Header';

export default Header;
