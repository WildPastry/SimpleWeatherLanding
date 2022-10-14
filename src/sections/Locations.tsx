import { Col, Container, Row } from 'react-bootstrap';
import LocationIcon from '../components/LocationIcon';

// Locations
const Locations: React.FC = () => {
  return (
    <Container fluid='lg' className='sectionContainer'>
      <Row>
        <Col sm={12} lg={7} className='fontRg locationContainer'>
          <h3>
              Millions of search results using{' '}
            <a
              className='ms-1 spotBlue'
              href='https://cloud.google.com/maps-platform/places'
              target='_blank'
              rel='noopener noreferrer'>
              Google Places API
            </a>
          </h3>
          <h3>
            Millions of locations for weather data including over 200,000 cities worldwide
            provided by
            <a
              className='ms-1 spotBlue'
              href='https://openweathermap.org/'
              target='_blank'
              rel='noopener noreferrer'>
              OpenWeather
            </a>
          </h3>
        </Col>
        <Col
          sm={12}
          lg={5}
          className='positionRelative d-flex justify-content-center align-items-center'>
          <LocationIcon />
        </Col>
      </Row>
    </Container>
  );
};

// EXPORT Locations
Locations.displayName = 'Locations';
export default Locations;
