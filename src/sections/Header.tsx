import logo from '../assets/logo.svg';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
	return (
		<Navbar className='px-2' collapseOnSelect expand='lg' bg='light' variant='light'>
			<Container fluid='lg'>
				<Navbar.Brand>
					{/* <img src={logo} className='appLogoNav' alt='SimpleWeather' /> */}
					<h5 className='mb-0'>
						<span className='fontLt dark me-1'>SIMPLE</span>
						<span className='fontBd spotBlue'>WEATHER</span>
					</h5>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
					<Nav className='mr-auto'>
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
			</Container>
		</Navbar>
	);
};

Header.displayName = 'Header';
export default Header;
