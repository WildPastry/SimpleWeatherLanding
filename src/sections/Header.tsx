import logo from '../assets/logo.svg';
import { Container, Nav, Navbar } from 'react-bootstrap';

// scroll function from APP
interface ScrollProps {
	scrollToPane(num: number): any;
}

// HEADER
const Header: React.FC<ScrollProps> = (props) => {
	return (
		<Container className='my-2' fluid='lg'>
			<Navbar collapseOnSelect expand='md' bg='light' variant='light'>
				<Navbar.Brand className='d-flex align-items-center'>
					<img src={logo} className='appLogoNav' alt='SimpleWeather' />
					<span className='h2Lt me-1'>SIMPLE</span>
					<span className='h2Bd spotBlue'>WEATHER</span>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
					<Nav className='mr-auto fontRg'>
						<Nav.Link onClick={() => props.scrollToPane(0)} href='#Features'>
							Features
						</Nav.Link>
						<Nav.Link onClick={() => props.scrollToPane(1)} href='#Locations'>
							Locations
						</Nav.Link>
						<Nav.Link onClick={() => props.scrollToPane(2)} href='#Weather'>
							Weather
						</Nav.Link>
						<Nav.Link onClick={() => props.scrollToPane(3)} href='#About'>
							About
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};

// EXPORT HEADER
Header.displayName = 'Header';
export default Header;
