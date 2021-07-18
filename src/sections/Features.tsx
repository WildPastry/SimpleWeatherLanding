// import frameworks
import { Col, Container, Row } from 'react-bootstrap';

// import images
import screenOne from '../assets/img/screen-1.jpg';
import screenTwo from '../assets/img/screen-2.jpg';

// Features
const Features: React.FC = () => {
	return (
		<Container fluid='xl' className='featureContainer'>
			<Row className='featuresWrapper'>
				<Col sm={12} lg={6}>
					<div className='screenShotWrapper'>
						<img
							src={screenOne}
							className='screenShot screenShotOver'
							alt='SimpleWeather Christchurch Summary Screen'
						/>
						<img
							src={screenTwo}
							className='screenShot screenShotUnder'
							alt='SimpleWeather Help Screen'
						/>
					</div>
				</Col>
				<Col sm={12} lg={6}>
					<div className='featuresTextWrapper fontRg'>
						<h2 className='h2Bd'>Features.</h2>
						<p>
							Data provided by OpenWeather and DarkSky with access to <b>thousands</b> of
							locations worldwide.
						</p>
						<p>
							Location search with Google for fast and reliable results.
						</p>
						<p>Sign up to the app to be able to save locations for faster access to your most searched locations.</p>
						<p>Easy to use with a basic daily summary and a 5 day forecast.</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

// EXPORT Features
Features.displayName = 'Features';
export default Features;
