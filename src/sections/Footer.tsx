// import frameworks
import { Col, Container, Row } from 'react-bootstrap';

// import assets
import logo from '../assets/icon/logo.svg';

/** @type {SectionProps} */
/** @param {SectionProps} params.scrollToSection */
/** @param {SectionProps} params.togglePrivacy */
/** @param {SectionProps} params.toggleTerms */

// Footer
const Footer: React.FC<SectionProps> = (props) => {
	// get date
	const currentDate = new Date().getFullYear();

	return (
		<Container fluid='lg' className='my-3'>
			<Row className='my-3'>
				<Col xs={12}>
					<div
						className='d-flex justify-content-center align-items-center pointerCursor'
						onClick={() => props.scrollToSection(0)}>
						<img src={logo} className='appLogoNav' alt='SimpleWeather' />
						<span className='h2Lt me-1'>SIMPLE</span>
						<span className='h2Bd spotBlue'>WEATHER</span>
					</div>
					<hr />
					<ul>
						<li onClick={() => props.scrollToSection(1)}>Features</li>
						<li onClick={() => props.scrollToSection(2)}>Locations</li>
						<li onClick={() => props.scrollToSection(3)}>Weather</li>
						<li onClick={() => props.togglePrivacy()}>Privacy</li>
						<li onClick={() => props.toggleTerms()}>Terms</li>
					</ul>
					<div className='text-center'>
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
