import logo from '../assets/logo.svg';
import {
	Col,
	Row,
	Nav,
	Navbar
} from 'react-bootstrap';

const Header = () => {
	return (
		<Navbar className='px-2' collapseOnSelect expand='lg' bg='dark' variant='dark'>
			<Navbar.Brand href='#home' className='d-flex align-items-center'>
				<img src={logo} className='appLogoNav' alt='SimpleWeather' />
				<span className='h1Lt light me-1'>SIMPLE</span>
				<span className='h1Bd spotBlue'>WEATHER</span>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
				<Nav className='mr-auto'>
					<Nav.Link href='#features'>Features</Nav.Link>
					<Nav.Link href='#deets'>About Me</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

Header.displayName = 'Header';
export default Header;
