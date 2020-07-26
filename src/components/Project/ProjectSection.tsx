import React from 'react'
import DataInterface from '../../Data/interfaces'
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title'

const ProjectSection = (project_section_data : DataInterface.ProjectSection) => {
    return (
    <section id = "projects">
        <Container>
            <div className="project-wrapper">
                <Title title = "Projects"></Title>
            </div>
        </Container>
    </section>
    )
}

export default ProjectSection;