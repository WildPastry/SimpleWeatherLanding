// import frameworks
import { Col, Container, Row } from 'react-bootstrap';

// About
const About: React.FC = () => {
	return (
		<section className='positionRelative weatherContainer bgimg-4'>
			<Container fluid='lg'>
				<Row>
					<Col sm={12}>
						<section className='aboutText light'>A SIMPLE APPROACH</section>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

// EXPORT About
About.displayName = 'About';
export default About;
