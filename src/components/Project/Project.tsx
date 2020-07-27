import React, {useEffect, useState } from 'react'
import DataInterface from '../../Data/interfaces'
import {Row, Col} from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import ProjectImg from './ProjectImg'
import Tilt from 'react-tilt';

const Project = (project_data : DataInterface.ProjectData) => { 
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    
    const {id, image, description, title, github_url, demo_url} = project_data;

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
        <Row key = {id}>
            <Col lg = {4} sm={12}>
                <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                    >
                         <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">{title}</h3>
                            <div>
                            <p>
                                {description}
                             </p>

                            </div>
                            <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-btn cta-btn--hero"
                            href={demo_url || "#!"}
                            >
                            Demo 
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-btn text-color-main"
                                href={github_url}
                            >
                                Source Code
                            </a>
                         </div>
                </Fade>
            </Col>

            <Col lg={8} sm={12}>
                <Fade
                        right={isDesktop}
                        bottom={isMobile}
                        duration={1000}
                        delay={1000}
                        distance="30px"
                >
                    <div className="project-wrapper__image">
                    <a
                        href={demo_url ||'#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={image} />
                          </div>
                        </Tilt>
                      </a>

                    </div>
                </Fade>
            </Col>
        </Row>
    )
}

export default Project;