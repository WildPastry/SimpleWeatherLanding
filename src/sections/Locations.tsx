// import frameworks
import { Col, Container, Row } from 'react-bootstrap';

// LOCATIONS
const Locations: React.FC = () => {
	return (
		<Container fluid='lg' className='my-3'>
			<Row className='my-3'>
				<Col xs={12} className='fontRg'>
					<h2 className='h2Bd'>Locations.</h2>
					<p>
							Data provided by OpenWeather and DarkSky with access to <b>thousands</b> of
							locations worldwide.
						</p>
						<p>
							Location search with Google for fast and reliable results.
						</p>
						<p>Sign up to the app to be able to save locations for faster access to your most searched locations.</p>
						<p>Easy to use with a basic daily summary and a 5 day forecast.</p>
				</Col>
			</Row>
		</Container>
	);
};

// EXPORT LOCATIONS
Locations.displayName = 'Locations';
export default Locations;
