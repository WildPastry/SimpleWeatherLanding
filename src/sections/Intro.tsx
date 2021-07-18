// import frameworks
import { Col, Container, Row } from 'react-bootstrap';

// import assets
import googleBadge from '../assets/img/google-play-badge.png';

// Intro
const Intro: React.FC = () => {
	return (
		<Container fluid='lg' className='my-3'>
			<Row className='my-3'>
				<Col xs={12}>
					<h1 className='h1Bd'>Does what the name suggests.</h1>
					<h2 className='h2Rg'>
						Fast, accurate, and intuitive weather app designed for iOS and Android.
					</h2>
				</Col>

			</Row>
			<img src={googleBadge} className='googleBadge' alt='Google Play Store' />
		</Container>
	);
};

// EXPORT Intro
Intro.displayName = 'Intro';
export default Intro;
