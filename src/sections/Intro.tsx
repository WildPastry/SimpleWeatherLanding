// import frameworks
import { Col, Container, Row } from 'react-bootstrap';

// import assets
import googleBadge from '../assets/img/google-play-badge.png';
import appleBadge from '../assets/img/app-store-badge.png';

// Intro
const Intro: React.FC = () => {
	return (
		<Container fluid='lg' className='mt-3 mb-4'>
			<Row className='my-3'>
				<Col xs={12}>
					<h1 className='h1Bd'>Does what the name suggests</h1>
					<h2 className='h2Rg'>
						Fast, accurate, and intuitive weather app designed for iOS and Android
						<span className='spotGreyMed'> *</span>
					</h2>
					<p className='spotGreyMed mb-0'>* SimpleWeather will be available 22 November</p>
				</Col>
			</Row>
			<img src={googleBadge} className='storeBadge defaultCursor greyScale' alt='Google Play Store' />
			<img src={appleBadge} className='storeBadge defaultCursor greyScale mx-3' alt='App Store' />
		</Container>
	);
};

// EXPORT Intro
Intro.displayName = 'Intro';
export default Intro;
