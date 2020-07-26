import React, {useEffect, useState } from 'react'
import DataInterface from '../../Data/interfaces'


const Project = (project_data : DataInterface.ProjectData) => { 
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
    
    return (
        <>
        </>
    )

}