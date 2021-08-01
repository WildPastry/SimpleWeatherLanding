// import frameworks
import { useLottie } from 'lottie-react';

// import assets
import loader from '../assets/animations/loader.json';

// AppLoading
const AppLoading = () => {
	// icon styles
	const style = {
		height: 200
	};

	// icon options
	const options = {
		animationData: loader,
		loop: true,
		autoplay: true
	};

	// diplay the loading animation
	const { View } = useLottie(options, style);
	return <section className='loader'>{View}</section>;
};

// EXPORT AppLoading
AppLoading.displayName = 'AppLoading';
export default AppLoading;
