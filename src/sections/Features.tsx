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
					<p>Current temp, daily low temp, daily high temp</p>
					<p>Ability to sign up to the App’s database. Signing up will let you: save up to 5 locations, set up to one location as “home” (which will then load every time you open the app until you change or remove it), remove locations and remove or change “home” locations</p>
					<p>Authentication screen to enter a valid email and password for signing in</p>
					<p>Help screen explaining the basic icons and functions of the App</p>
					<p>Password recovery logic to send the user a new “temp” password if they forget it (SIMPLEWEATHER has no way to see or supply user passwords)</p>
					<p>Icons by React IonIcons</p>
					<p>Fonts by Aller and Merriweather</p>
					<p>Google time zone API</p>
					<p>Google places API</p>
					<p>OpenWeather API</p>
					<p>Firebase API</p>
					<p>13 Navigation screens</p>
					<p>3 Authentication screens</p>
					<p>IOS and Android compatible (only releasing on Android for now)</p>
					<p>Collapsible menu with options to sign-out or sign-in, sign-up (if you haven’t signed-in) and a help section explaining the controls/operation/icons of the App</p>
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
