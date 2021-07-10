import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
	return (
				<Container fluid='lg' className='my-3'>
					<Row className='my-3'>
						<Col xs={12}>
							<h2 className='h2Rg'>FOOTER</h2>
						</Col>
					</Row>
				</Container>
	);
};

Footer.displayName = 'Footer';
export default Footer;
