// import frameworks
import { Col, Container, Row } from 'react-bootstrap';

// FOOTER
const Footer: React.FC = () => {
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

// EXPORT FOOTER
Footer.displayName = 'Footer';
export default Footer;
