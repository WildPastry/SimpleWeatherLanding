import { Container, Row } from 'react-bootstrap';

const Scroll = () => {
	return (
		<div className='positionRelative'>
			<Container fluid className='my-3'>
				<Row className='my-3'>
					<div className='icon-slider-wrapper'>
						<div className='icon-slider' />
					</div>
				</Row>
			</Container>
		</div>
	);
};

Scroll.displayName = 'Scroll';
export default Scroll;
