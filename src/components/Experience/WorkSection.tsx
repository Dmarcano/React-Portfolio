import React from 'react'
import { Container} from 'react-bootstrap';
import DataInterface from '../../Data/interfaces'
import Work from './Work'

const WorkSection = (props : DataInterface.WorkSection) => { 
    

    return (
        <section id = "projects">
            <Container>
            <div className="project-wrapper">
                {props.work_data.map(work => {
                    return (
                        <Work {...work}/>
                    )
                } )}
            </div>
            </Container>
        </section>
    )
}

export default WorkSection;