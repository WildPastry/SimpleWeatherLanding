import { Col, Container, Row } from 'react-bootstrap';

const Locations = () => {
	return (
			<Container fluid='lg' className='my-3'>
				<Row className='my-3'>
					<Col xs={12}><h2 className='h2Rg'>LOCATIONS</h2></Col>
				</Row>
			</Container>
	);
};

Locations.displayName = 'Locations';
export default Locations;
