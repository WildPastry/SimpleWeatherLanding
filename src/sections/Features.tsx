// import frameworks
import { Col, Container, Row } from 'react-bootstrap';

// import images
import screenOne from '../assets/img/screen-1.jpg';
import screenTwo from '../assets/img/screen-2.jpg';

// FEATURES
const Features: React.FC = () => {
	return (
		<Container fluid='lg' className='my-5'>
			<Row className='featuresWrapper'>
				<Col xs={12} sm={6}>
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
				<Col xs={12} sm={{ span: 5, offset: 1 }}>
					<div className='featuresTextWrapper'>
						<h2 className='h2Bd'>Features.</h2>
						<p className='fontLt'>
							Data provided by OpenWeather and DarkSky with access to <b>thousands</b> of
							locations worldwide.
						</p>
						<p className='fontLt'>
							Location search with Google for fast and reliable results.
						</p>
						<p className='fontLt'>Sign up to the app to be able to save locations for faster access to your most searched locations.</p>
						<p className='fontLt'>Easy to use with a basic daily summary and a 5 day forecast.</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

// EXPORT FEATURES
Features.displayName = 'Features';
export default Features;
