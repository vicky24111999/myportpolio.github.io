import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_SOLYTICS from "../../assets/img/experience/Solytics.png";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={L_SOLYTICS}
                  alt="Accenture logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    SOLYTICS PARTNERS
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      FrontEnd Developer & Software Tester
                    </strong>
                    <br />
                    <strong>Technology:</strong> React JS,Redux,Material
                    UI,Postman
                    <br />
                    <strong>Duration:</strong> Nov 2020 - Present
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong>Developed &amp; enhanced</strong> multiple
                        features with customizability option across web
                        application.
                      </li>
                      <li>
                        <strong>Developed</strong> work in many technologies to
                        make frontend smooth and bug free at the same time
                        working in testing team to test API's and find Bugs to
                        resolve them.
                      </li>
                      <li>
                        <strong>Provided</strong> Frontend as well as Manual
                        Tester .
                      </li>
                      <li>
                        <strong>Performed</strong>Writing code for frontend with
                        many technologies like Material UI , React , Redux . In
                        the testing side test APIs with Postman and use many
                        software testing methods to test the UI.
                      </li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
