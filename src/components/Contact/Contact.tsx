import React from 'react'
import Fade from 'react-reveal/Fade';
import { Container, Overlay, Tooltip } from 'react-bootstrap';
import DataInterface from '../../Data/interfaces'
import Title from '../Title/Title';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Contact = (contact_info : DataInterface.ContactData) => {

    const [copied, setCopied] = React.useState(false);
    const target = React.useRef(null);

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
                        onCopy={() => setCopied(!copied)}
                        >
                        
                        <a  className="cta-btn cta-btn--resume"  
                            target="_blank"
                            ref = {target}
                            //rel="noopener noreferrer"
                        >
                            {"Copy My Email!"}
                        </a >
                    </CopyToClipboard >
                    <Overlay target={target.current} show={copied} placement="right">
                        {(props) => (
                        <Tooltip  {...props} bsPrefix = 'cpy-btn'>
                            Copied!
                        </Tooltip>
                        )}
                    </Overlay>
                    </div>
                </Fade>
            </Container>
        </section>
    )
}

export default Contact