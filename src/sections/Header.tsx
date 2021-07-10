import logo from '../assets/logo.svg';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
	return (
		<Container className='my-2' fluid='lg'>
			<Navbar className='navbar-xxs' collapseOnSelect expand='md' bg='light' variant='light'>
				<Navbar.Brand className='p-0'>
					<img src={logo} className='appLogoNav' alt='SimpleWeather' />
					<span className='h2Lt me-1'>SIMPLE</span>
					<span className='h2Bd spotBlue'>WEATHER</span>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
					<Nav className='mr-auto fontRg'>
						<Nav.Link href='#Data'>Data</Nav.Link>
						<Nav.Link href='#Locations'>Locations</Nav.Link>
						<Nav.Link href='#Weather'>Weather</Nav.Link>
						<Nav.Link href='#Features'>Features</Nav.Link>
						<Nav.Link href='#About'>About</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};

Header.displayName = 'Header';
export default Header;
