import { Container, Row } from 'react-bootstrap';

const IconSlider = () => {
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

IconSlider.displayName = 'IconSlider';
export default IconSlider;
