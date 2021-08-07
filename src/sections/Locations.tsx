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
					<p>
						Data provided by OpenWeather with access to <b>thousands</b> of
						locations worldwide.
					</p>
					<p>Location search with Google for fast and reliable results.</p>
					<p>
						Sign up to the app to be able to save locations for faster access to your most
						searched locations.
					</p>
					<p>Easy to use with a basic daily summary and a 5 day forecast.</p>
				</Col>
				<Col sm={12} lg={6} className='positionRelative d-flex justify-content-center align-items-center'>
					<LocationIcon />
				</Col>
			</Row>
		</Container>
	);
};

// EXPORT Locations
Locations.displayName = 'Locations';
export default Locations;
