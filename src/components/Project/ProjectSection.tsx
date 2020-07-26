import React from 'react'
import DataInterface from '../../Data/interfaces'
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title'
import Project from './Project'

const ProjectSection = (project_section_data : DataInterface.ProjectSection) => {
    return (
    <section id = "projects">
        <Container>
            <div className="project-wrapper">
                <Title title = "Projects"></Title>
                {project_section_data.data.map((project)=> {
                    return(
                        <Project {...project} />
                    )
                }) 
                }
            </div>
        </Container>
    </section>
    )
}

export default ProjectSection;