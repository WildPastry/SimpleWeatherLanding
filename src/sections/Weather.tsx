import { Col, Container, Row } from 'react-bootstrap';

const Weather = () => {
	return (
			<Container fluid='lg' className='my-3'>
				<Row className='my-3'>
					<Col xs={12}><h2 className='h2Rg'>WEATHER</h2></Col>
				</Row>
			</Container>
	);
};

Weather.displayName = 'Weather';
export default Weather;
