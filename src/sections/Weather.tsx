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
						<p>Colour coded backgrounds paired with 26 animated weather icons to suit different weather conditions.</p>
						<p>Initial details include the current temp, daily low temp, daily high temp with a short description.
						</p>
						<p>More details include 9am / mid-day / 6pm weather condition icons for the current day, a description, with “feels like” temp, wind speed, humidity percentage, expected daily high and sunset time (if day) or sunrise time (if night).
						</p>
						<p>
						Five-day forecast starting from the next day includes a weather condition icon, low temp, high temp, description, wind speed km and icon, humidity percentage and icon.
						</p>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

// EXPORT WEATHER
Weather.displayName = 'Weather';
export default Weather;
