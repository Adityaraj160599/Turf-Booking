import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactUs from "../contactUs";

function AboutUs(props) {
  return (
    <>
      <div className="main_Aboutus">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="main-aboutus">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="header-text">
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="aboutUS_content">
                <div className="heading">
                  <h4>About Us</h4>
                </div>
                <p>Playspots is India’s leading Sports recreational platform for Venues, academies and Individuals.
                  We couldn’t believe there was no one-stop shop for sports players looking to find, contact and book local sports turfs. we set about researching, getting support for and then building a platform that showed all sports venues anywhere in south India, and that was free and easy for anyone to use.We know the urban work-life balance isn’t always easy to juggle and our services takes the hassle away from finding places and co- players
                  Our mission is making it easier for everyone to play sports and increasing the utilisation of facilities as a result.
                  Sports play a pivotal role in bringing people together, sharing moments and enhancing the well-being are reasons that form the  essence of PlaySpots.
                  Our Goal is making the sports simple #LetTheWorldPlay</p>

                <p>We also aim to bring people closer to their sport of choice through unique events for companies and individuals!</p>
              </div>
            </Col>
          </Row>
        </Container>
        <ContactUs/>
      </div>
    </>
  );
}

export default AboutUs;




