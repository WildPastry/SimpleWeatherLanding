import logo from '../assets/logo.svg';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
	return (
		<Container className='my-2' fluid='lg'>
			<Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
				<Navbar.Brand className='p-0 d-flex align-items-center'>
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
						<Nav.Link
							href='https://mikeparker.co.nz/'
							target='_blank'
							rel='noopener noreferrer'>
							Developer
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};

Header.displayName = 'Header';
export default Header;
