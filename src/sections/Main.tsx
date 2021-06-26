import { Col, Row } from 'react-bootstrap';
import Slideshow from '../components/SlideShow';

const Main = () => {
	return (
		<Row className='my-3'>
			<Col xs={12}>
				<Slideshow />
			</Col>
		</Row>
	);
};

Main.displayName = 'Main';

export default Main;
