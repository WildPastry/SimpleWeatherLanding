// import frameworks
import { Container, Row } from 'react-bootstrap';

// IconSlider
const IconSlider: React.FC = () => {
	return (
		<div className='positionRelative'>
			<Container fluid className='py-5'>
				<Row>
					<div className='icon-slider-wrapper'>
						<div className='icon-slider' />
					</div>
				</Row>
			</Container>
		</div>
	);
};

// EXPORT IconSlider
IconSlider.displayName = 'IconSlider';
export default IconSlider;
