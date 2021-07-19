// import assets
import WeatherIconOne from '../assets/img/weather-icon.png';

// WeatherIcon
const WeatherIcon: React.FC = () => {
	return <img className='weatherIcon' src={WeatherIconOne} alt='Weather Icon One' />;
};

// EXPORT WeatherIcon
WeatherIcon.displayName = 'WeatherIcon';
export default WeatherIcon;
