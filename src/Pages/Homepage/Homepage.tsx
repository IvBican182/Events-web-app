import styles from "./Homepage.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Homepage = () => {
    return (
        <Container className={styles.article_container}>
            <Row className={`${styles.row}` + "justify-content-center w-100"}>
                <Col className="w-auto text-center">
                    <div className={styles.text_section}>
                        <h1 className="introduction">
                            All music events <br />
                            in one place
                        </h1>
                        <p className="description">
                            Are you passionate about live music
                            and always looking for the next great concert to attend? <br />
                            Do you want an effortless way to discover, plan, and share  
                            your concert experiences? <br />
                            Look no further! Event Master is here  
                            to transform how you enjoy live music.
                        </p>
                    </div>
                    <button className="event-btn">
                        Get started
                    </button>
                </Col>
            </Row>
        </Container>
    )
}

export default Homepage;