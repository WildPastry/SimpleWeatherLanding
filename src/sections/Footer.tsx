import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
	return (
		<div className='bgimg-1'>
			<Container fluid='lg' className='my-3'>
				<Row className='my-3'>
					<Col xs={12}>FOOTER</Col>
				</Row>
			</Container>
		</div>
	);
};

Footer.displayName = 'Footer';
export default Footer;
