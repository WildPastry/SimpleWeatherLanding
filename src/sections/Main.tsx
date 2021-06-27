import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Main = () => {
	const pageData = useSelector((state: RootState) => {
		return state.imageData;
	});

	console.log(pageData, 'from Main.tsx');

	return (
		<Row className='my-3'>
			<Col xs={12}>
				...
				{/* <Slideshow /> */}
			</Col>
		</Row>
	);
};

Main.displayName = 'Main';

export default Main;
