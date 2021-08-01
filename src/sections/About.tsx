// import frameworks
import { Col, Container, Row } from 'react-bootstrap';

// About
const About: React.FC = () => {
	return (
		<Container fluid='lg' className='sectionContainer'>
			<Row>
				<Col sm={12}>
					<section className='aboutText simpleWeather'>A SIMPLE APPROACH</section>
				</Col>
			</Row>
		</Container>
	);
};

// EXPORT About
About.displayName = 'About';
export default About;
