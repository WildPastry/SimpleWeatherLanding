// import assets
import WeatherIconOne from '../assets/img/weather-icon-1.png';
// import WeatherIconTwo from '../assets/img/weather-icon-2.png';

// WeatherIcon
const WeatherIcon: React.FC = () => {
	return (
		<>
			<img className='weatherIcon' src={WeatherIconOne} alt='Weather Icon One' />
			{/* <img className='weatherIcon' src={WeatherIconTwo} alt='Weather Icon Two' /> */}
		</>
	);
};

// EXPORT WeatherIcon
WeatherIcon.displayName = 'WeatherIcon';
export default WeatherIcon;
