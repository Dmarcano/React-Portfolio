import React from 'react' 
import Fade from 'react-reveal/Fade'

const Title = ({title}) => { 

    return (
        <Fade >
            <h2 className="section-title">{title}</h2>
        </Fade>
    )
}

export default Title