// import frameworks
import { useLottie } from 'lottie-react';

// import assets
import dayClear from '../assets/animations/weather/dayClear.json';
import brokenClouds from '../assets/animations/weather/brokenClouds.json';
import nightClear from '../assets/animations/weather/nightClear.json';
import thunderStorm from '../assets/animations/weather/thunderStorm.json';
import lightDrizzle from '../assets/animations/weather/lightDrizzle.json';
import snow from '../assets/animations/weather/snow.json';

// WeatherIcon
const WeatherIcon: React.FC = () => {
	const weatherIcons = [
		dayClear,
		brokenClouds,
		nightClear,
		thunderStorm,
		lightDrizzle,
		snow
	];

	// select a random weather icon
	var randomWeather = Math.floor(Math.random() * weatherIcons.length);
	var currentIcon = weatherIcons[randomWeather];

	// icon styles
	const style = {
		height: 300
	};

	// icon options
	const options = {
		animationData: currentIcon,
		loop: true,
		autoplay: true
	};

	// diplay the weather animation
	const { View } = useLottie(options, style);
	return View;
};

// EXPORT WeatherIcon
WeatherIcon.displayName = 'WeatherIcon';
export default WeatherIcon;
