import { Col, Container, Row } from 'react-bootstrap';
import { Close } from 'react-ionicons';
import { Link } from 'react-router-dom';

// Privacy
const Privacy: React.FC = (): JSX.Element => {
  return (
    <section className='fullPageFixed bg-dark overFlowScroll'>
      <Link to={'/'}>
        <Close
          cssClasses='closeIcon'
          color={'#1faadb'}
          title={'CLOSE'}
          height='50px'
          width='50px'
        />
      </Link>
      <Container fluid='lg' className='sectionContainerPadded'>
        <Row>
          <Col sm={12}>
            <div className='d-flex align-items-center mb-3'>
              <h2 className='h2Bd spotBlue mb-0'>PRIVACY STATEMENT</h2>
            </div>
            <p className='spotGreyMed'>
              <b>
                With permission, we may use location information supplied by
                you, including:
              </b>
            </p>
            <ol>
              <li className='light'>Latitude</li>
              <li className='light'>Longitude</li>
            </ol>
            <h5 className='light'>WHY WE USE THIS INFORMATION</h5>
            <p className='spotGreyMed'>
              We use this information in order to:
              <br />
              <br />
              Provide you with weather relevant to your location. Providing this
              information is entirely optional. If you allow the App to use your
              location, your latitude and longitude are sent to our weather
              supplier{' '}
              <a
                className='spotBlue'
                href='https://openweathermap.org/'
                target='_blank'
                rel='noopener noreferrer'>
                OpenWeather
              </a>{' '}
              who use the coordinates to supply the weather data.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// EXPORT Privacy
Privacy.displayName = 'Privacy';
export default Privacy;
