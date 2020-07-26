import React from 'react'
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import DataInterface from '../../Data/interfaces'
import Title from '../Title/Title';

const Contact = (contact_info : DataInterface.ContactData) => {
    return (
        <section id="contact">
            <Container>
                <Title title="contact" />
                <Fade bottom duration={1000} delay={800} distance="30px">
                <div className="contact-wrapper">
                    <p className="contact-wrapper__text">
                    { 'Would you like to work with me? Awesome!'}
                    </p>
                    <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    href={contact_info.email ? `mailto:${contact_info.email}` : '#!'}
                    // href = "#!"
                    >
                    {"Let's Talk"}
                    </a>
                </div>
        </Fade>
            </Container>
        </section>
    )
}

export default Contact