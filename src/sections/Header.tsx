import { Col, Row } from 'react-bootstrap';

const Header = () => {
	return (
		<Row className='my-3'>
			<Col xs={12}>
				<span className='h1Lt textLight me-1'>SIMPLE</span>
				<span className='h1Bd textLight'>WEATHER</span>
			</Col>
		</Row>
	);
};

Header.displayName = 'Header';

export default Header;
