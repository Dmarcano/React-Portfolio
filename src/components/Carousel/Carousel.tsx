import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import DataInterface from '../../Data/interfaces'

interface CarouselProp {
    work_section : DataInterface.WorkSection,
    project_section : DataInterface.ProjectSection
}

const Carousel = (props : CarouselProp) => {

    const [section, setSection] = React.useState('project_section');
    
    return (
        <div>

        </div>
    )

}