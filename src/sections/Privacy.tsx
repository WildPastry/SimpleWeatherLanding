import { Col, Container, Row } from 'react-bootstrap';
import { Close } from 'react-ionicons';

/** @type {TogglePrivacy} */
/** @param {TogglePrivacy} params.togglePrivacy */

// Privacy
const Privacy: React.FC<TogglePrivacy> = (props) => {
  return (
    <section className='fullPageFixed bg-dark overFlowScroll'>
      <Close
        onClick={() => props.togglePrivacy()}
        cssClasses='closeIcon'
        color={'#1faadb'}
        title={'CLOSE'}
        height='50px'
        width='50px'/>
      <Container fluid='lg' className='sectionContainerPadded'>
        <Row>
          <Col sm={12}>
            <div className='d-flex align-items-center mb-3'>
              <h2 className='h2Bd spotBlue mb-0'>PRIVACY STATEMENT</h2>
            </div>
            <p className='spotGreyMed'>
              <b>
                With permission, we may collect personal information from you,
                including information about:
              </b>
            </p>
            <ol>
              <li className='light'>A user-defined name</li>
              <li className='light'>Your email address</li>
            </ol>
            <h5 className='light'>WHY WE COLLECT THIS INFORMATION</h5>
            <p className='spotGreyMed'>
              We collect this information in order to:
              <br />
              <br />
              Grant you access to all of the features of the App by signing you
              up to our database. In order to do this we need a username and an
              email address. Providing this information is entirely optional. If
              you choose not to enter a username and email address, we'll be
              unable to save your username into our database and therefore can't
              provide you the full features of the App.
            </p>
            <h5 className='light'>INFORMATION STORAGE</h5>
            <p className='spotGreyMed'>
              We keep your information safe by storing it in encrpyted files and
              never accessing it unless requested by an authenticated user. If
              inactive, we keep your information for two years at which point we
              securely destroy it by erasing it from the database. Please note
              we do not have access to user passwords, if you forget your
              password it can be securely reset using the App.
            </p>
            <h5 className='light'>YOUR RIGHTS</h5>
            <p className='spotGreyMed'>
              You have the right to ask for a copy of any personal information
              we hold about you, and to ask for it to be corrected if you think
              it is wrong. If you’d like to ask for a copy of your information,
              or to have it corrected, please contact us at{' '}
              <a className='spotBlue' href='mailto:mike@mikeparker.co.nz'>
                mike@mikeparker.co.nz.
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// EXPORT Privacy
Privacy.displayName = 'Privacy';
export default Privacy;
