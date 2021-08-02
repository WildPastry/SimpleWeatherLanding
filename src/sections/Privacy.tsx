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
				<img src={logo} className='appLogo my-2' alt='SimpleWeather' />
				<h1 className='spotBlue my-2'>WE TAKE PRIVACY SERIOUSLY</h1>
				<h5 className='light my-2'>Information here</h5>
				</Container>
			</div>
		</>
	);
};

// EXPORT Privacy
Privacy.displayName = 'Privacy';
export default Privacy;
