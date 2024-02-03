import { Col, Container, Row } from 'react-bootstrap';
import { Mail } from 'react-ionicons';
import logo from '../assets/icon/logo.svg';

/** @type {SectionProps} */
/** @param {SectionProps} params.scrollToSection */
/** @param {SectionProps} params.togglePrivacy */
/** @param {SectionProps} params.toggleTerms */

// Footer
const Footer: React.FC<SectionProps> = (props: SectionProps) => {
  // Get date
  const currentDate = new Date().getFullYear();

  return (
    <Container fluid='lg' className='my-3'>
      <Row className='my-3'>
        <Col xs={12}>
          <div
            className='positionFlex pointerCursor'
            onClick={() => props.scrollToSection(0)}>
            <img src={logo} className='appLogoNav' alt='SimpleWeather' />
            <span className='h2Lt me-1'>SIMPLE</span>
            <span className='h2Bd spotBlue'>WEATHER</span>
          </div>
          <hr />
          <ul>
            <li>
              <span
                className='pointerCursor spanLink'
                onClick={() => props.scrollToSection(1)}>
                Features
              </span>
            </li>
            <li>
              <span
                className='pointerCursor spanLink'
                onClick={() => props.scrollToSection(2)}>
                Locations
              </span>
            </li>
            <li>
              <span
                className='pointerCursor spanLink'
                onClick={() => props.scrollToSection(3)}>
                Weather
              </span>
            </li>
            <li>
              <span
                className='pointerCursor spanLink'
                onClick={() => props.togglePrivacy()}>
                Privacy
              </span>
            </li>
            <li>
              <span
                className='pointerCursor spanLink'
                onClick={() => props.toggleTerms()}>
                Terms
              </span>
            </li>
          </ul>
          <hr />
          <div className='text-center'>
            <span className='contactContainer mb-2'>
              <Mail
                color={'#6e859e'}
                cssClasses='me-1'
                height='25px'
                width='25px'
              />
              <a className='clouds' href='mailto:mike@mikeparker.co.nz'>
                mike@mikeparker.co.nz
              </a>
            </span>
            <p className='clouds'>
              © {currentDate}
              <a
                className='ms-1 spotBlue'
                href='https://mikeparker.co.nz/'
                target='_blank'
                rel='noopener noreferrer'>
                Mike Parker
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

// EXPORT Footer
Footer.displayName = 'Footer';
export default Footer;
