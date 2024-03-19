/* eslint-disable no-mixed-spaces-and-tabs */
// Bootstrap imports
import { Container, Row, Col } from 'react-bootstrap';
import './spacestyle.css';

function App() {
 

  return (
    <>
      <Container fluid>
		    <header className="w-100">
			    <div className="head-center-pr clearfix pt-4 pb-4">
            <div className="logo-div-pr float-left">
              <a href="index.html" className="logo-a-pr">
                {/* <img src="images/translogo.gif" alt="S.P.A.C.E. Center Chiropractic" className="logo-pr"> */}
              </a>
            </div>
				    <div className="title-div-pr float-left">
					    <div className="title-center-pr">
						    <h1 className="text-center title-h1-pr">NASA Fitness</h1>
						    <h5 className="text-center text-secondary title-h5-pr">425 E. NASA Parkway</h5>
						    <h5 className="text-center text-secondary title-h5-pr">Webster, TX 77598</h5>
					    </div>
				    </div>
          </div>
		    </header>
	    </Container>
	    <div id="menu-pr">
		    <p className="m-0 menu-p-pr">CLICK HERE FOR MENU</p>
	    </div>
	    <Container fluid>
		    <Row className="border-pr">
			    <Col lg={3} xl={2} className="nav-color-pr css-hs-pr" id="navpr">
            <a
              role="button"
              className="btn btn-outline-dark btn-block text-black-pr btn-black-pr mt-3"
              href="index.html">
              Home
            </a>
            <a
              role="button"
              className="btn btn-outline-dark btn-block text-black-pr btn-black-pr"
              href="About.html">
              About
            </a>
            <a
              role="button"
              className="btn btn-outline-dark btn-block text-black-pr btn-black-pr" href="direction.html">
              Directions
            </a>
            <a
              role="button"
              className="btn btn-outline-dark btn-block text-black-pr btn-black-pr"
              href="links.html">
              Helpful Links
            </a>
            <a
              role="button"
              className="btn btn-outline-dark btn-block text-black-pr btn-black-pr" href="mailto:dr@nasafitness.com?SUBJECT=Ask Doctor Kyle&amp;BODY=Please type question here:&amp;bcc=kyle.o.sprecher@nasa.com">
              Contact Us
            </a>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
