import logo from '../assets/logo.svg';
import { Col, Row } from 'react-bootstrap';

const Header = () => {
	return (
		<Row className='my-3'>
			<Col xs={12}>
				<span className='h1Lt textLight me-1'>SIMPLE</span>
				<span className='h1Bd textBlue'>WEATHER</span>
			</Col>
			<Col xs={12}>
				<img src={logo} className='appLogo' alt='SimpleWeather' />
			</Col>
		</Row>
	);
};

Header.displayName = 'Header';

export default Header;
