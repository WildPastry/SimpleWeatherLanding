import { Col, Container, Row } from 'react-bootstrap';

const Weather = () => {
	return (
		<div className='bgimg-1'>
			<Container fluid='lg' className='my-3'>
				<Row className='my-3'>
					<Col xs={12}>WEATHER</Col>
				</Row>
			</Container>
		</div>
	);
};

Weather.displayName = 'Weather';
export default Weather;
