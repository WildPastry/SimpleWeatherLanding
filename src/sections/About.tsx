// import frameworks
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// /**
//  * @param {Object} params
//  * @param {WeatherData} params.day
//  * @param {Function} close
//  * @returns
//  */

//  const AddViewlink = ({day}) => {
//   if (!day) {
//     var currentWd = 'WEATHER';
//   }

//   /** @type {[ WeatherData, (wT:WeatherData)=>void]} */
//   const [ link, checkData ] = useState(day ? { ...day } : {
// 		id: 0,
// 		label: '',
// 		openData: 'weekly',
// 		darkSkyData: 'current',
// 		icon: '',
// 		type: 'day',
// 		desc: ''
//   });

//   /** @param {(wT:WeatherData) => void} func */
//   const updateViewlink = (func: (wT: WeatherData) => void) => {
//     const wT = { ...link };
//     func(wT);
//     checkData(wT);
//   };

//   const consoleData = (id: number, label: string, openData: WetherType, darkSkyData: WetherType, icon: string, type: string, desc: string ) => {
// 		console.log((wT: { label: string; }) => wT.label = 'THIS');
//   };

// About
const About: React.FC = () => {
	return (
		<Container fluid='lg' className='my-3'>
			<Row className='my-3'>
				<Col xs={12} className='fontRg'>
					<h2 className='h2Bd thunderStorm'>About.</h2>
						<p className='spotOrange pointerCursor'>CHECK DATA</p>
						<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo justo ut libero pretium, sit amet lobortis turpis auctor. Morbi vel libero purus. Vestibulum dapibus felis id lectus fermentum condimentum. Aliquam dictum ut diam tempus porttitor. Morbi egestas elit a odio lobortis aliquet. Nullam sollicitudin, odio et tempor cursus, eros felis hendrerit tortor, a egestas nibh ligula quis augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget felis ut libero congue accumsan sed sed eros. </h5>
				</Col>
			</Row>
		</Container>
	);
};

// EXPORT About
About.displayName = 'About';
export default About;
