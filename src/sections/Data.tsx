import { Col, Container, Row } from 'react-bootstrap';

const Data = () => {
	return (
			<Container fluid='lg' className='my-3'>
				<Row className='my-3'>
					<Col xs={12}>
						<h2 className='h2Rg'>DATA</h2>
					</Col>
				</Row>
			</Container>
	);
};

Data.displayName = 'Data';
export default Data;
