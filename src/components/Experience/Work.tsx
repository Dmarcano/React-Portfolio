import React, {useEffect, useState } from 'react'
import DataInterface from '../../Data/interfaces'
import {Row, Col} from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import ProjectImg from '../Project/ProjectImg'
import Tilt from 'react-tilt';


const Work = (props : DataInterface.WorkExperience) => {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    

    useEffect(() => {
        if (window.innerWidth > 769) {
          setIsDesktop(true);
          setIsMobile(false);
        } else {
          setIsMobile(true);
          setIsDesktop(false);
        }
      }, []);

    const {title, company, description, image, link} = props;

    return(
        <div>

        </div>
    )
}

export default Work;