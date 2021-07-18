// import frameworks
import { Col, Container, Row } from 'react-bootstrap';

// ABOUT
const About: React.FC = () => {
	return (
		<Container fluid='lg' className='my-3'>
			<Row className='my-3'>
				<Col xs={12}>
				<h2 className='h2Bd'>About.</h2>
				</Col>
			</Row>
		</Container>
	);
};

// EXPORT ABOUT
About.displayName = 'About';
export default About;
