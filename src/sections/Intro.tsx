import { Col, Container, Row } from 'react-bootstrap';
import googleBadge from '../assets/img/google-play-badge.png';

// Intro
const Intro: React.FC = () => {
  return (
    <Container fluid='lg' className='mt-3 mb-4'>
      <Row className='my-3'>
        <Col xs={12}>
          <h1 className='h1Bd'>Does what the name suggests</h1>
          <h2 className='h2Rg'>Simple, fast, and intuitive weather.</h2>
        </Col>
      </Row>
      <a
        href='https://play.google.com/store/apps/details?id=nz.co.mikeparker.sw'
        target='_blank'
        rel='noopener noreferrer'>
        <img src={googleBadge} className='storeBadge' alt='Google Play Store' />
      </a>
    </Container>
  );
};

// EXPORT Intro
Intro.displayName = 'Intro';
export default Intro;
