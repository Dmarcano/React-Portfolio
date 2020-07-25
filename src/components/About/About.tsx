import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import DataInterface from '../../Data/interfaces'
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title'

const About = (props : DataInterface.AboutData) => {

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
                
            </Container>
        </section>
        )
}

export default About