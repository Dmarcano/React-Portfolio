import React from 'react'
import { Container} from 'react-bootstrap';
import DataInterface from '../../Data/interfaces'
import Work from './Work'

const WorkSection = (props : DataInterface.WorkSection) => { 
    

    return (
        <section id = "work">
            <div className="project-wrapper">
                {props.work_data.map(work => {
                    return (
                        <Work {...work}/>
                    )
                } )}
            </div>
        </section>
    )
}

export default WorkSection;