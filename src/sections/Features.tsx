/* eslint-disable max-len */
import 'tippy.js/dist/tippy.css';
import {
  AddCircle,
  ArrowDown,
  ArrowUp,
  CloseCircle,
  Home,
  Search
} from 'react-ionicons';
import { Col, Container, Row } from 'react-bootstrap';
import { RootState } from '../store';
import Tippy from '@tippyjs/react';
import { useSelector } from 'react-redux';

// Features
const Features: React.FC = () => {
  // Redux selector
  const pageData = useSelector((state: RootState) => {
    return state.imageData;
  });

  return (
    <Container fluid='lg' className='sectionContainer'>
      <Row>
        <Col sm={12} lg={6}>
          <div className='screenShotWrapper'>
            <img
              src={pageData.imageList[3]}
              className='screenShot screenShotOne'
              alt='SimpleWeather Cloudy Screen Example'
            />
            <img
              src={pageData.imageList[4]}
              className='screenShot screenShotTwo'
              alt='SimpleWeather Thunder Screen Example'
            />
          </div>
        </Col>
        <Col sm={12} lg={6} className='fontRg'>
          <h2 className='h2Bd thunderStorm'>Features</h2>
          <p>
            Sign up to the database to save up to 5 locations, set one location
            as “home”, remove locations and remove or change “home” locations.
          </p>
          <p>Authentication screens for secure signing in.</p>
          <p>
            IOS and Android compatible (though only releasing on Android for
            now)
          </p>
          <p>
            Collapsible menu with options to sign-in, sign-out or sign-up (if
            you haven’t signed-in) and a help section explaining the
            controls/operation/icons of the App.
          </p>
          <div className='mt-4 appIcons'>
            <Tippy
              theme='simpleWeather'
              className='p-1'
              content='Set locations as home'
              placement='bottom'>
              <span className='tippyWrapper'>
                <Home color={'#37d493'} height='50px' width='50px' />
              </span>
            </Tippy>
            <Tippy
              theme='simpleWeather'
              className='p-1'
              content='Save locations'
              placement='bottom'>
              <span className='tippyWrapper'>
                <AddCircle color={'#17577a'} height='50px' width='50px' />
              </span>
            </Tippy>
            <Tippy
              theme='simpleWeather'
              className='p-1'
              content='Remove locations'
              placement='bottom'>
              <span className='tippyWrapper'>
                <CloseCircle color={'#17577a'} height='50px' width='50px' />
              </span>
            </Tippy>
            <Tippy
              theme='simpleWeather'
              className='p-1'
              content='Search for locations'
              placement='bottom'>
              <span className='tippyWrapper'>
                <Search color={'#313136'} height='50px' width='50px' />
              </span>
            </Tippy>
            <Tippy
              theme='simpleWeather'
              className='p-1'
              content='High temperature'
              placement='bottom'>
              <span className='tippyWrapper'>
                <ArrowUp color={'#2485c7'} height='50px' width='50px' />
              </span>
            </Tippy>
            <Tippy
              theme='simpleWeather'
              className='p-1'
              content='Low temperature'
              placement='bottom'>
              <span className='tippyWrapper'>
                <ArrowDown color={'#2485c7'} height='50px' width='50px' />
              </span>
            </Tippy>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

// EXPORT Features
Features.displayName = 'Features';
export default Features;
