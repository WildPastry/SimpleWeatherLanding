// import frameworks
import { Container } from 'react-bootstrap';

// import assets
import logo from '../assets/icon/logo.svg';

// import icon
import { Close } from 'react-ionicons';

/** @type {TogglePrivacy} */
/** @param {TogglePrivacy} params.togglePrivacy */

// Privacy
const Privacy: React.FC<TogglePrivacy> = (props) => {
	return (
		<>
			<div className='fullPageFixed bg-dark privacyContainer'>
			<Container fluid='lg' className='sectionContainerPadded privacyContainer'>
				<Close
					onClick={() => props.togglePrivacy()}
					cssClasses='closeIcon'
					color={'#1faadb'}
					title={'CLOSE'}
					height='50px'
					width='50px'
				/>
				<img src={logo} className='appLogo mb-4' alt='SimpleWeather' />
				<h1 className='spotBlue my-2'>WE TAKE PRIVACY SERIOUSLY</h1>
				<p className='light my-2 fontRg'>SIMPLEWEATHER will not under any circumstances reveal or share your data with any other source.</p>
				<p className='light my-2 fontRg'>Your account can be securely removed from our database if requested by an authenticated user.</p>
				</Container>
			</div>
		</>
	);
};

// EXPORT Privacy
Privacy.displayName = 'Privacy';
export default Privacy;
