// import frameworks
import { Container, Row } from 'react-bootstrap';

// ICONSLIDER
const IconSlider: React.FC = () => {
	return (
		<div className='positionRelative'>
			<Container fluid className='py-5'>
				<Row className='mt-2'>
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
