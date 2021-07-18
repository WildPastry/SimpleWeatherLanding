// import frameworks
import { Col, Container, Row } from 'react-bootstrap';

// ABOUT
const About: React.FC = () => {
	return (
		<Container fluid='lg' className='my-3'>
			<Row className='my-3'>
				<Col xs={12} sm={6} className='fontRg'>
					<h2 className='h2Bd'>About.</h2>
						<p>Quisque et nunc euismod, porttitor urna sed, facilisis arcu</p>
						<p>Cras vel diam facilisis justo accumsan efficitur quis eu risus</p>
						<p>Pellentesque id est vitae ante pulvinar luctus vitae ac elit</p>
						<p>Fusce consectetur felis maximus, lacinia dolor at, vehicula massa</p>
						<p>Phasellus ac tellus tristique orci molestie auctor</p>
						<p>Aliquam efficitur ante maximus magna aliquet, eget vestibulum leo tempor</p>
				</Col>
			</Row>
		</Container>
	);
};

// EXPORT ABOUT
About.displayName = 'About';
export default About;
