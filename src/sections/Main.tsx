import { Col, Container, Row } from 'react-bootstrap';

const Main = () => {
	return (
		<Container fluid='lg' className='my-3'>
			<Row className='my-3'>
				<Col xs={12}>MAIN</Col>
			</Row>
		</Container>
	);
};

Main.displayName = 'Main';
export default Main;
