// import frameworks
import { Col, Container, Form, Row } from 'react-bootstrap';

// CONTACT
const Contact: React.FC = () => {
	return (
		<Container fluid='lg' className='sectionContainer'>
			<Form>
				<Row>
					<Col xs={12} sm={6} className='fontRg'>
						<Form.Control type='email' placeholder='Enter email' />
						<Form.Text className='text-muted'>
							We'll never share your email with anyone else.
						</Form.Text>
						<button type='submit'>Submit</button>
					</Col>
					<Col xs={12} sm={6} className='fontRg'>
						<Form.Control as='textarea' rows={3} placeholder='Message' />
					</Col>
				</Row>
			</Form>
		</Container>
	);
};

// EXPORT CONTACT
Contact.displayName = 'Contact';
export default Contact;
