import React from "react";
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import {Row, Col} from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className="footer navbar-static-bottom">
            <Container fluid> 
            <Row >
                <Col></Col>
                <Col>
                <span className="back-to-top">
                    <Link to="hero" smooth duration={1000}>
                        <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
                    </Link>
                </span>
                </Col>
                <Col></Col>
                </Row>


                <Row>
                <Col></Col>

                <Col>
                <a  className="cta-btn cta-btn--hero" href = "https://icons8.com/">
                    icons from icons8
                </a>
                </Col>

                <Col></Col>
                
                </Row>
            </Container>
        </footer>
    )
}

export default Footer