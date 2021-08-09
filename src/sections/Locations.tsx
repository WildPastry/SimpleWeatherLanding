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
					<h2 className='h2Bd thunderStorm'>Locations</h2>
					<h5>Millions of search results powered by Google Places.</h5>
					<h5>Millions of locations of weather data provided by OpenWeather.</h5>
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
