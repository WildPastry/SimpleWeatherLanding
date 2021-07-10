// import frameworks
import { Container, Row } from 'react-bootstrap';

// ICONSLIDER
const IconSlider: React.FC = () => {
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

// EXPORT ICONSLIDER
IconSlider.displayName = 'IconSlider';
export default IconSlider;
