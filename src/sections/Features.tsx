import { Col, Container, Row } from 'react-bootstrap';

const Features = () => {
	return (
		<div className='bgimg-1'>
			<Container fluid='lg' className='my-3'>
				<Row className='my-3'>
					<Col xs={12}>FEATURES</Col>
				</Row>
			</Container>
		</div>
	);
};

Features.displayName = 'Features';
export default Features;
