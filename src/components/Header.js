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
                <div className="contact-phone"> +1 (626) 864-0110 </div>
              </Col>
              <Col xs={4}>
                <div className="contact-email"> johnmabie94@gmail.com </div>
              </Col>
              <Col xs={4}>
                <div className="contact-city"> Tulsa, Oklahoma </div>
              </Col>
            </div>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Header;
