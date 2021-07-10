// import frameworks
import { Col, Container, Row } from 'react-bootstrap';

// FEATURES
const Features: React.FC = () => {
	return (
		<Container fluid='lg' className='my-3'>
			<Row className='my-3'>
				<Col xs={12}>
					<h2 className='h2Rg'>FEATURES</h2>
				</Col>
			</Row>
		</Container>
	);
};

// EXPORT FEATURES
Features.displayName = 'Features';
export default Features;
