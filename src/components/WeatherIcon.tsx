// import assets
import WeatherIconOne from '../assets/img/weather-icon-1.png';
// import WeatherIconTwo from '../assets/img/weather-icon-2.png';
// import axios from 'axios';
// fetch('../assets/data/weatherIcons.json')
// 	.then((res) => res.json())
// 	.then((data) => {
// 		console.log(data);
// 	});

// WeatherIcon
const WeatherIcon: React.FC = () => {

// 	useEffect(() => {
//     fetch('data.json')
//         .then(response => response.json())
//         .then((json) => setData(json))
// }, [])

// axios.get('data.json')
// .then(res => console.log(res.data))
// .catch(err => console.log(err)

	// fetch("src/assets/data/weatherIcons.json")
	// .then(res => console.log(res))

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
