// retrying the styling using React-Bootstrap since custom CSS and MUI were causing a litany of problems!

import face from "../assets/media/106616130_276750643430394_6992149895293952372_n.jpg";
import face2 from "../assets/media/whosethot.png";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <>
      <Container>
        <div className="home-content">
          <Row className="home-intro">
            <Col md={{ span: 2 }}>
              <div className="face">
                <img src={face2} alt="Jack Mabie Portrait by Dalton Mannerud" />
              </div>
            </Col>
            <Col md={{ span: 8 }}>
              <div className="home-blurb">
                <h4>Welcome to my React Portfolio!</h4>
                <p>
                  Check out some <Link to={"/projects"}>projects</Link> I've
                  worked on!
                </p>
                <p>
                  Or, reach out if you have any{" "}
                  <Link to={"/contacts"}>questions</Link> for me!
                </p>
              </div>
            </Col>
          </Row>
          <Row className="home-info">
            <Col md={{ span: 8 }}>
              <div className="home-text">
                <h4>My name is Jack Mabie</h4>
                <p>
                  After years of working as a freelance audio engineer, I wanted
                  to take my experience working with music and music technology
                  to a new level.
                </p>
                <p>
                  At the end of 2022, I enrolled in a 6-month full-stack web
                  development bootcamp by way of UC Berkeley Extension in order
                  to add another skillset which could be of benefit to, and
                  benefit from, my love of music.
                </p>
                <p>
                  From no prior experience coding, I can now say that this site
                  has been built entirely with the React JavaScript library
                  thanks to the bootcamp!
                </p>
              </div>
            </Col>
            <Col md={{ span: 2, offset: 2 }}>
              <div className="second-face">
                <img src={face} alt="Jack Mabie Portrait by Nicklaus Gray" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Home;
