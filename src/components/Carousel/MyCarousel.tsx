import React from 'react'
import {Row, Col, Carousel} from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import DataInterface from '../../Data/interfaces'
import Title from '../Title/Title'
import ProjectSection from '../Project/ProjectSection'

interface CarouselProp {
    work_section : DataInterface.WorkSection,
    project_section : DataInterface.ProjectSection
}

const MyCarousel = (props : CarouselProp) => {

    
    return (
        <>
       <Carousel interval={null}>
            <Carousel.Item>
                <Title title = "Projects"></Title>
                <ProjectSection {...props.project_section}/>
           </Carousel.Item>
           <Carousel.Item>
           <Title title = "Work Experience"></Title>

           </Carousel.Item>
        </Carousel>
       </>
    )

}
export default MyCarousel;