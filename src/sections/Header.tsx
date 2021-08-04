// import frameworks
import { Container, Nav, Navbar } from 'react-bootstrap';

// import assets
import logo from '../assets/icon/logo.svg';

/** @type {ScrollToSection} */
/** @param {ScrollToSection} params.scrollToSection */

// Header
const Header: React.FC<ScrollToSection> = (props) => {
	return (
		<Container className='my-2' fluid='lg'>
			<Navbar collapseOnSelect expand='md' bg='light' variant='light'>
				<Navbar.Brand
					className='d-flex align-items-center'
					onClick={() => props.scrollToSection(0)}>
					<img src={logo} className='appLogoNav' alt='SimpleWeather' />
					<span className='h2Lt me-1'>SIMPLE</span>
					<span className='h2Bd spotBlue'>WEATHER</span>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
					<Nav className='mr-auto fontRg clouds'>
						<div className='px-2 navLink' onClick={() => props.scrollToSection(1)}>Features</div>
						<div className='px-2 navLink' onClick={() => props.scrollToSection(2)}>Locations</div>
						<div className='px-2 navLink' onClick={() => props.scrollToSection(3)}>Weather</div>
						<div className='px-2 navLink' onClick={() => props.scrollToSection(4)}>Contact</div>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};

// EXPORT Header
Header.displayName = 'Header';
export default Header;
