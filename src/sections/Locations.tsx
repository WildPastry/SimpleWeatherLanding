import { Col, Container, Row } from 'react-bootstrap';

const Locations = () => {
	return (
		<div className='bgimg-1'>
			<Container fluid='lg' className='my-3'>
				<Row className='my-3'>
					<Col xs={12}>LOCATIONS</Col>
				</Row>
			</Container>
		</div>
	);
};

Locations.displayName = 'Locations';
export default Locations;
