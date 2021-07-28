// import frameworks
import { Col, Container, Row } from 'react-bootstrap';

// import components
import WeatherIcon from '../components/WeatherIcon';

// WEATHER
const Weather: React.FC = () => {
	return (
		<Container fluid='md' className='weatherContainer'>
			<Row className='weatherWrapper'>
				<Col
					sm={12}
					lg={6}
					className='positionRelative d-flex justify-content-center align-items-center'>
					{/* <div className='weatherBackGround' /> */}
					<WeatherIcon />
				</Col>
				<Col sm={12} lg={6} className='weatherTextWrapper fontRg'>
					<h2 className='h2Bd thunderStorm'>Weather.</h2>
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
				</Col>
			</Row>
		</Container>
	);
};

// EXPORT WEATHER
Weather.displayName = 'Weather';
export default Weather;
