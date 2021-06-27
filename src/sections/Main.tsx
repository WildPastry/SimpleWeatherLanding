import { Col, Row } from 'react-bootstrap';
import SlideShow from '../components/SlideShow';

const Main = () => {
	return (
		<Row className='my-3'>
			<Col xs={12}>
				<SlideShow />
			</Col>
		</Row>
	);
};

Main.displayName = 'Main';
export default Main;
