// import frameworks
import { Col, Container, Row } from 'react-bootstrap';

// WEATHER
const Weather: React.FC = () => {
	return (
		<Container fluid='lg' className='my-3'>
			<Row className='my-3'>
				<Col xs={12}>
				<h2 className='h2Bd'>Weather.</h2>
				</Col>
			</Row>
		</Container>
	);
};

// EXPORT WEATHER
Weather.displayName = 'Weather';
export default Weather;
