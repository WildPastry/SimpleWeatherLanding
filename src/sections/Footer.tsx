import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
	return (
		<div className='bgimg-1'>
			<Container fluid='lg' className='my-3'>
				<Row className='my-3'>
					<Col xs={12}>
						<p className='h2Bd textLight'>FOOTER</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

Footer.displayName = 'Footer';
export default Footer;
