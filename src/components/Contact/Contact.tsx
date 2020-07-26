import React from 'react'
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import DataInterface from '../../Data/interfaces'
import Title from '../Title/Title';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Contact = (contact_info : DataInterface.ContactData) => {

    const [copied, setCopied] = React.useState(false);
    const [copyText, setCopyText] = React.useState(copied ? "Copied!" : "Copy My Email!");

    return (
        <section id="contact">
            <Container>
                <Title title="contact me" />
                <Fade bottom duration={1000} delay={800} distance="30px">
                <div className="contact-wrapper">
                    <p className="contact-wrapper__text">
                    { 'Want to get in contact? Great!'}
                    </p>
                    <CopyToClipboard 
                    text={contact_info.email}
                    onCopy={() => setCopied(true)}>
                    
                    <a className="cta-btn cta-btn--resume"  
                    target="_blank"
                    rel="noopener noreferrer"
                    // href={`mailto:${contact_info.email}`}
                    // onClick={()=> {return false;}}
                    // onClick={return false} 
                    >
                        {copied ? "Copied!" : "Copy My Email!"}
                        </a>
                    </CopyToClipboard >
                </div>
        </Fade>
            </Container>
        </section>
    )
}

export default Contact