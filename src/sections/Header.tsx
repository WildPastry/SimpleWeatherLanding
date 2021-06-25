import { Col, Row } from 'react-bootstrap';

const Header = () => {
	return (
		<Row className='my-3'>
			<Col xs={12}>
				<span className='headingLt me-1'>SIMPLE</span>
				<span className='headingBd'>WEATHER</span>
			</Col>
		</Row>
	);
};

Header.displayName = 'Header';

export default Header;
