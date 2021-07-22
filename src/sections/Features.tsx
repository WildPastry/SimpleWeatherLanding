// import frameworks
import { Col, Container, Row } from 'react-bootstrap';

// import assets
import screenOne from '../assets/img/screen-1.jpg';
import screenTwo from '../assets/img/screen-2.jpg';

// import icons
import { AddCircle, ArrowUp, ArrowDown, CloseCircle, Home, Search } from 'react-ionicons';

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
				<Col sm={12} lg={6} className='featuresTextWrapper fontRg'>
					<h2 className='h2Bd thunderStorm'>Features.</h2>
					<p>
						Data provided by OpenWeather and DarkSky with access to <b>thousands</b> of
						locations worldwide.
					</p>
					<p>Location search with Google for fast and reliable results.</p>
					<p>
						Sign up to the app to be able to save locations for faster access to your most
						searched locations.
					</p>
					<p>Easy to use with a basic daily summary and a 5 day forecast.</p>
					<div className='mt-4'>
					<Home color={'#37d493'} cssClasses='me-4' title={'Home'} height='50px' width='50px' />
					<AddCircle color={'#17577a'} cssClasses='me-4' title={'Add Circle'} height='50px' width='50px' />
					<CloseCircle color={'#17577a'} cssClasses='me-4' title={'Close Circle'} height='50px' width='50px' />
					<Search color={'#313136'} cssClasses='me-4' title={'Search'} height='50px' width='50px' />
					<ArrowUp color={'#2485c7'} cssClasses='me-4' title={'High Temp'} height='50px' width='50px' />
					<ArrowDown color={'#2485c7'} cssClasses='me-4' title={'Low Temp'} height='50px' width='50px' />
					</div>
				</Col>
			</Row>
		</Container>
	);
};

// EXPORT Features
Features.displayName = 'Features';
export default Features;
