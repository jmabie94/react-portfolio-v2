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
            <Col md={{ span: 2 }} className="my-auto">
              <div className="face">
                <img src={face2} alt="Jack Mabie Portrait by Dalton Mannerud" />
              </div>
            </Col>
            <Col md={{ span: 8 }}>
              <div className="home-blurb">
                <h4>Welcome to my <span>React Portfolio</span>!</h4>
                <p>
                  Check out some <Link to={"/projects"}>projects</Link> I've
                  worked on!
                </p>
                <p>
                  Or, reach out if you have any{" "}
                  <Link to={"/contact"}>questions</Link> for me!
                </p>
              </div>
            </Col>
          </Row>
          <Row className="home-info">
            <Col md={{ span: 9 }}>
              <div className="home-text">
                <h4>My name is <span>Jack Mabie</span></h4>
                <p>
                  After years of working as a freelance audio engineer, I decided it was time to diversify my skillset beyond music and music technology by learning back-end web development.
                </p>
                <p>
                  At the end of 2022, I enrolled in a 6-month full-stack web
                  development bootcamp by way of UC Berkeley Extension in order
                  to expand what I was able to accomplish in music and to create a new career avenue outside of music.
                </p>
                <p>
                  Coming from no prior coding experience, I'm very excited to say that my comfort with back-end web development has flourished and I've been able to build not only this website, but a large portion (if not all) of the back-end code for all of the <Link to={"/projects"}>projects</Link> listed!
                </p>
              </div>
            </Col>
            <Col md={{ span: 3 }} className="my-auto">
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
