import SingleProject from "./SingleProject";
// import { projectData } from "../data/db.js";
import Container from "react-bootstrap/Container";
// import viewIcon from "../assets/media/223930.png";
// import gitIcon from "../assets/media/25231.png";
import { Eye } from "react-bootstrap-icons";
import { Github } from "react-bootstrap-icons";
import gamingScreenshot from "../assets/media/screencapture-whispering-beach-93510-herokuapp-games-2023-05-25-22_48_25.png";
import discScreenshot from "../assets/media/discexchange-user-profile-when-logged-in.png";
import mealScreenshot from "../assets/media/results-page.png";
import noSQLScreenshot from "../assets/media/nosql-social-network.png";
import jateScreenshot from "../assets/media/jate-with-test-text.png";
import trackerScreenshot from "../assets/media/employeetracker1.PNG";

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
// import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// cannot get the mapped version of this to work correctly! :'(
/* const AllProjects = () => {
    return (
        <>
        <div className="all-projects">
            <Container className="projects-container">
                {projectData && <SingleProject projectData={projectData} title="Projects" />}
            </Container>
        </div>
        </>
    );
}; */

const AllProjects = () => {
    return (
        <>
            <div className="all-projects">
                <Container className="projects-container">
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" className="project-photo" src={gamingScreenshot} alt="React Gaming Website" />
                            <Card.Body>
                                <Card.Title>React Gaming Website</Card.Title>
                                <Card.Text>Using React, MERN, JWT, GraphQL & MongoDB to build a website which allows Users to log in and play classic board and chance games within their browser against a Computer player. In future development, will be adding multiplayer functionality and a live chat which will allow any users competing in the given game to message eachother and provide some loving trash talk.</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary" href="https://whispering-beach-93510.herokuapp.com/">
                                    <Eye /> View
                                </Button>
                                <Button variant="secondary" href="https://github.com/jmabie94/PWA-React-Game-App">
                                    <Github /> GitHub
                                </Button>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" className="project-photo" src={discScreenshot} alt="Disc Exchange" />
                            <Card.Body>
                                <Card.Title>Disc Exchange</Card.Title>
                                <Card.Text>Using Node.js, Handlebars.js, MySQL, Sequelize and Multer to build a functional Peer to Peer resale website for physical music media, such as CDs, cassettes and vinyl records. Users can post listings, sort listings by type, add other listings to their favorites, and build a shopping cart with a subtotal. When posting listings, Users are even given the option to either link to the image of the cover art, or upload a file directly, such as a photo of the actual physical copy they are selling.</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary" href="https://serene-forest-09402.herokuapp.com/">
                                    <Eye /> View
                                </Button>
                                <Button variant="secondary" href="https://github.com/ikaera/Project-2">
                                    <Github /> GitHub
                                </Button>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" className="project-photo" src={mealScreenshot} alt="Personalized Meal Generator" />
                            <Card.Body>
                                <Card.Title>Personalized Meal Generator</Card.Title>
                                <Card.Text>Using Javascript, Jquery, Multiple APIs, Bulma Styling and HTML to build an interactive page-by-page form for Users to fill, and uses the User selections to generate a recipe (with an instructional video) that best fits their chosen parameters, i.e. dietary restrictions and allergies, while accounting for calorie ranges determined by the difference between current and ideal weight.</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary" href="https://saf1ya-c0d3z.github.io/LazyLoaderMealGenerator/">
                                    <Eye /> View
                                </Button>
                                <Button variant="secondary" href="https://github.com/saf1ya-c0d3z/LazyLoaderMealGenerator">
                                    <Github /> GitHub
                                </Button>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" className="project-photo" src={noSQLScreenshot} alt="NoSQL Social Network API" />
                            <Card.Body>
                                <Card.Title>NoSQL Social Network API</Card.Title>
                                <Card.Text>Using MongoDB to build a Social Network API which can be used to create new users, add users as mutual friends, add new posts and react to those posts, as well as update or delete all users, friends, posts and reactions.</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary" href="https://github.com/jmabie94/4-20-23-NoSQL-Social-Network-API">
                                    <Eye /> View
                                </Button>
                                <Button variant="secondary" href="https://github.com/jmabie94/4-20-23-NoSQL-Social-Network-API">
                                    <Github /> GitHub
                                </Button>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" className="project-photo" src={trackerScreenshot} alt="MySQL Employee Tracker" />
                            <Card.Body>
                                <Card.Title>MySQL Employee Tracker</Card.Title>
                                <Card.Text>Using Node.js, Inquirer Prompts and MySQL to build a custom database by using the terminal to create departments, roles within departments and add employees to respective departments and roles.</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary" href="https://github.com/jmabie94/3-9-23-Employee-Tracker">
                                    <Eye /> View
                                </Button>
                                <Button variant="secondary" href="https://github.com/jmabie94/3-9-23-Employee-Tracker">
                                    <Github /> GitHub
                                </Button>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" className="project-photo" src={jateScreenshot} alt="PWA Text Editor App" />
                            <Card.Body>
                                <Card.Title>PWA Text Editor App</Card.Title>
                                <Card.Text>Using Progressive Web Applications and IndexedDB to build a browser-friendly and installable Text Editing Application that uses Service Workers to persist without an active Internet connection.</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary" href="https://fast-lake-90185.herokuapp.com/">
                                    <Eye /> View
                                </Button>
                                <Button variant="secondary" href="https://github.com/jmabie94/4-27-23-PWA-Text-Editor">
                                    <Github /> GitHub
                                </Button>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        </>
    );
};

export default AllProjects;
