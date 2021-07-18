// import frameworks
import { Col, Container, Row } from 'react-bootstrap';

// LOCATIONS
const Locations: React.FC = () => {
	return (
		<Container fluid='lg' className='my-3'>
			<Row className='my-3'>
				<Col xs={12}>
					<h2 className='h2Bd'>Locations.</h2>
				</Col>
			</Row>
		</Container>
	);
};

// EXPORT LOCATIONS
Locations.displayName = 'Locations';
export default Locations;
