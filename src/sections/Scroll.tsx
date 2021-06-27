import { Col, Row } from 'react-bootstrap';

const Scroll = () => {
	return (
		<Row className='my-3'>
			<Col xs={12}>
				<div id='rssBlock'>
					<p className='cnnContents Weatherfont'>
						<span className='marqueeStyle'>
							continuous infinite text loop 1 continuous infinite text loop 2{' '}
						</span>
					</p>
				</div>
			</Col>
		</Row>
	);
};

Scroll.displayName = 'Scroll';
export default Scroll;
