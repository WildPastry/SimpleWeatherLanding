// import frameworks
import { Col, Container, Row } from 'react-bootstrap';

// import assets
import logo from '../assets/logo.svg';

// FOOTER
const Footer: React.FC = () => {
	// get date
	const currentDate = new Date().getFullYear();

	return (
		<Container fluid='lg' className='my-3'>
			<Row className='my-3'>
				<Col xs={12}>
					<div className='d-flex justify-content-center align-items-center'>
						<img src={logo} className='appLogoNav' alt='SimpleWeather' />
						<span className='h2Lt me-1'>SIMPLE</span>
						<span className='h2Bd spotBlue'>WEATHER</span>
					</div>
					<hr />
					<ul>
						<li>Features</li>
						<li>Locations</li>
						<li>Weather</li>
						<li>About</li>
						<li>Privacy</li>
						<li>Terms</li>
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

// EXPORT FOOTER
Footer.displayName = 'Footer';
export default Footer;
