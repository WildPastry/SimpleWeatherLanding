// import frameworks
import { Col, Container, Row } from 'react-bootstrap';

// import components
import WeatherIcon from '../components/WeatherIcon';

// WEATHER
const Weather: React.FC = () => {
	return (
		<section className='positionRelative weatherContainer bg-thunderStorm'>
			<Container fluid='lg'>
				<Row>
					<Col
						sm={12}
						lg={6}
						className='positionRelative d-flex justify-content-center align-items-center'>
						<WeatherIcon />
					</Col>
					<Col sm={12} lg={6} className='fontRg light'>
						<h2 className='h2Bd'>Weather</h2>
						<p>
							Weather data provided by OpenWeather with access to <b>thousands</b> of
							locations worldwide.
						</p>
						<p>Data sets ncluded are: the current temperature, a daily low and high, the weather condition.</p>
						<p>
							Sign up to the app to be able to save locations for faster access to your
							most searched locations.
						</p>
						<p>Easy to use with a basic daily summary and a 5 day forecast.</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

// EXPORT WEATHER
Weather.displayName = 'Weather';
export default Weather;
