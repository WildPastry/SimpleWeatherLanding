// import frameworks
import { Col, Container, Row } from 'react-bootstrap';

// import assets
import logo from '../assets/logo.svg';

// scroll function from APP
interface ScrollProps {
	scrollToPane(num: number): any;
}

// FOOTER
const Footer: React.FC<ScrollProps> = (props) => {
	// get date
	const currentDate = new Date().getFullYear();

	return (
		<Container fluid='lg' className='my-3'>
			<Row className='my-3'>
				<Col xs={12}>
					<div
						className='d-flex justify-content-center align-items-center pointerCursor'
						onClick={() => props.scrollToPane(0)}>
						<img src={logo} className='appLogoNav' alt='SimpleWeather' />
						<span className='h2Lt me-1'>SIMPLE</span>
						<span className='h2Bd spotBlue'>WEATHER</span>
					</div>
					<hr />
					<ul>
						<li onClick={() => props.scrollToPane(1)}>Features</li>
						<li onClick={() => props.scrollToPane(2)}>Locations</li>
						<li onClick={() => props.scrollToPane(3)}>Weather</li>
						<li onClick={() => props.scrollToPane(4)}>About</li>
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
