import "./SingleProject.css";
import viewIcon from "../assets/media/223930.png";
import gitIcon from "../assets/media/25231.png";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SingleProject = ({ projectData, title }) => {
  console.log(projectData);

  return (
    <section className="project-page">
      <div className="project-header">
        <h4>Projects</h4>
        <h6>Here are some of the projects I've worked on so far!</h6>
      </div>
      <div className="grid-container container">
        <Row xs={1} md={2} lg={3} className="g-4 d-flex">
          <CardGroup>
            <div className="project-grid flex-fill">
              {projectData.map((project) => {
                return (
                  <Col key={project.id}>
                    <Card>
                      <Card.Img
                        variant="top"
                        src={project.screenshot}
                        alt={project.title}
                      />
                      <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
                        <Button
                          variant="primary"
                          href={project.url}
                          size="small"
                        >
                          View
                        </Button>
                        <Button
                          variant="secondary"
                          href={project.github}
                          size="small"
                        >
                          GitHub
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </div>
          </CardGroup>
        </Row>
      </div>
    </section>
  );
};

export default SingleProject;
