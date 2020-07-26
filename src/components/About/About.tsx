import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import DataInterface from '../../Data/interfaces'
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title'
import { Link } from 'react-scroll';

const About = (about_data : DataInterface.AboutData) => {

    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 769) {
        setIsDesktop(true);
        setIsMobile(false);
        } else {
        setIsMobile(true);
        setIsDesktop(false);
        }
        }, []);

    return (
        <section id = "about">
            <Container>
                <Title title = "About Me" />
                <Row>
                    <Col  md={6} sm={12}>
                        <Fade bottom duration={1000} delay={600} distance="30px">
                            <h1>Filler Image</h1>
                        </Fade>
                    </Col>
                    <Col  md={6} sm={12}>
                    <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
                        <div className="about-wrapper__info">
                            <p className="about-wrapper__info-text">
                                {about_data.paragraph_one}
                            </p>
                            <p className="about-wrapper__info-text">
                                {about_data.paragraph_two}
                            </p>
                            <p className="about-wrapper__info-text">
                                { about_data.paragraph_three}
                            </p>
                            <a  className="cta-btn cta-btn--resume"
                                href="/#"
                            >
                                <Link to="about" smooth duration={1000}  >
                                    Resume
                                </Link>
                            </a>   
                        </div>
                    </Fade>
                </Col>

                </Row> 
                            
            </Container>
        </section>
        )
}

export default About