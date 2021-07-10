import { Col, Container, Row } from 'react-bootstrap';
import googleBadge from '../assets/img/google-play-badge.png';

const Intro = () => {
	return (
		<Container fluid='lg' className='my-3'>
			<Row className='my-3'>
				<Col xs={12}>
					<h1 className='h1Bd'>
						Does what it's name suggests. 
					</h1>
				</Col>
				<Col xs={12}>
					<h2 className='h2Rg'>Fast, accurate, and intuitive weather app designed for iOS and Android.</h2>
				</Col>
				<Col xs={12}>
					<img src={googleBadge} className='googleBadge' alt='Google Play Store' />
				</Col>
			</Row>
		</Container>
	);
};

Intro.displayName = 'Intro';
export default Intro;
