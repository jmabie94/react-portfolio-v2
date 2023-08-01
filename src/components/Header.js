import NavBar from "./NavBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
  return (
    <>
      <NavBar />
      <Container>
        <div className="home-header">
          <Row>
            <Col xs={12}>
              <h1 className="page-title">Full-Stack Web Developer</h1>
            </Col>
          </Row>
          <Row>
            <div className="contact-bar">
              <Col xs={4}>
                <div className="contact-phone">&nbsp;+1 (626) 864-0110&nbsp;</div>
              </Col>
              <Col xs={4}>
                <div className="contact-email">&nbsp;<a href="mailto: johnmabie94@gmail.com">johnmabie94@gmail.com</a>&nbsp;</div>
              </Col>
              <Col xs={4}>
                <div className="contact-city">&nbsp;Tulsa, Oklahoma&nbsp;</div>
              </Col>
            </div>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Header;
