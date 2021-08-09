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
						<p>Colour coded to suit different weather conditions</p>
						<p>26 animated weather icons to suit different weather conditions</p>
						<p>
							Current temp, daily low temp, daily high temp and the full date and local
							time
						</p>
						<p>Short current summary</p>
						<p>9am / mid-day / 6pm weather condition icons</p>
						<p>
							Five-day forecast starting from the next day which includes: weather
							condition icon, low temp, high temp, short summary, wind speed km and icon,
							humidity percentage and icon
						</p>
						<p>
							Long daily summary which includes: “feels like” temp, wind speed, humidity
							percentage, expected daily high and sunset time (if day) or sunrise time (if
							night)
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
