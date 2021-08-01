// import frameworks
import { Col, Container, Row } from 'react-bootstrap';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

// import assets
import screenOne from '../assets/img/screen-1.jpg';
import screenTwo from '../assets/img/screen-2.jpg';

// import icons
import { AddCircle, ArrowUp, ArrowDown, CloseCircle, Home, Search } from 'react-ionicons';

// Features
const Features: React.FC = () => {
	return (
		<Container fluid='lg' className='sectionContainer'>
			<Row>
				<Col sm={12} lg={6}>
					<div className='screenShotWrapper'>
						<img
							src={screenOne}
							className='screenShot screenShotOne'
							alt='SimpleWeather Christchurch Summary Screen'
						/>
						<img
							src={screenTwo}
							className='screenShot screenShotTwo'
							alt='SimpleWeather Los Angeles Summary Screen'
						/>
					</div>
				</Col>
				<Col sm={12} lg={6} className='fontRg'>
					<h2 className='h2Bd thunderStorm'>Features</h2>
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
					<div className='mt-4 appIcons'>
						<Tippy
							theme='simpleWeather'
							className='p-1'
							content='Set locations as home'
							placement='bottom'>
							<span className='tippyWrapper'>
								<Home color={'#37d493'} height='50px' width='50px' />
							</span>
						</Tippy>
						<Tippy
							theme='simpleWeather'
							className='p-1'
							content='Save locations'
							placement='bottom'>
							<span className='tippyWrapper'>
								<AddCircle color={'#17577a'} height='50px' width='50px' />
							</span>
						</Tippy>
						<Tippy
							theme='simpleWeather'
							className='p-1'
							content='Remove locations'
							placement='bottom'>
							<span className='tippyWrapper'>
								<CloseCircle color={'#17577a'} height='50px' width='50px' />
							</span>
						</Tippy>
						<Tippy
							theme='simpleWeather'
							className='p-1'
							content='Search for locations'
							placement='bottom'>
							<span className='tippyWrapper'>
								<Search color={'#313136'} height='50px' width='50px' />
							</span>
						</Tippy>
						<Tippy
							theme='simpleWeather'
							className='p-1'
							content='High temperature'
							placement='bottom'>
							<span className='tippyWrapper'>
								<ArrowUp color={'#2485c7'} height='50px' width='50px' />
							</span>
						</Tippy>
						<Tippy
							theme='simpleWeather'
							className='p-1'
							content='Low temperature'
							placement='bottom'>
							<span className='tippyWrapper'>
								<ArrowDown color={'#2485c7'} height='50px' width='50px' />
							</span>
						</Tippy>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

// EXPORT Features
Features.displayName = 'Features';
export default Features;
