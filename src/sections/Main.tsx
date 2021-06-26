// import logo from '../assets/logo.svg';
import { Col, Row } from 'react-bootstrap';
import Slideshow from '../components/SlideShow';

const Main = () => {
	return (
		<Row className='my-3'>
			{/* <Col xs={6}>
				<p className='h2Bd textLight'>MAIN</p>
			</Col> */}
			{/* <Col xs={6} className='text-center'>
				<img src={logo} className='appLogo' alt='SimpleWeather' />
			</Col> */}
			<Col xs={12}>
			<Slideshow />
			</Col>
		</Row>
	);
};

Main.displayName = 'Main';

export default Main;
