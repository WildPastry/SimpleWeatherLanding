// import frameworks
import { Col, Container, Row } from 'react-bootstrap';

// import components
import LocationIcon from '../components/LocationIcon';

// Locations
const Locations: React.FC = () => {
	return (
		<Container fluid='lg' className='sectionContainer'>
			<Row>
				<Col sm={12} lg={6} className='fontRg'>
					<h2>Millions of search results using the<a className='ms-1 spotBlue'
								href='https://cloud.google.com/maps-platform/places'
								target='_blank'
								rel='noopener noreferrer'>
								Google places API
							</a></h2>
					<h2>Millions of locations for weather data including over 200,000 cities worldwide provided by<a className='ms-1 spotBlue'
								href='https://openweathermap.org/'
								target='_blank'
								rel='noopener noreferrer'>
								OpenWeather
							</a></h2>
				</Col>
				<Col
					sm={12}
					lg={6}
					className='positionRelative d-flex justify-content-center align-items-center'>
					<LocationIcon />
				</Col>
			</Row>
		</Container>
	);
};

// EXPORT Locations
Locations.displayName = 'Locations';
export default Locations;
