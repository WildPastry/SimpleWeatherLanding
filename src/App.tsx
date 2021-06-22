import {Container} from 'react-bootstrap';
import AppLoading from './components/AppLoading';
import Header from './sections/Header';
import Main from './sections/Main';
import Login from './sections/Login';
import Footer from './sections/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/main.scss';

const App = () => {

  return (
    <Container fluid className='my-3'>
      <AppLoading />
      <Header />
      <Main />
      <Login />
      <Footer />
    </Container>
  );
};

App.displayName = 'App';

export default App;
