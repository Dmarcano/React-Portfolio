import React , {useState, useEffect}from 'react'
import {Container} from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import DataInterface from '../../Data/interfaces'



export default function Hero(hero_data : DataInterface.HeroData ) {
    // load in the hero context 
    //const {hero} = useContext(PortfolioContext);
    
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
        <section id = 'hero' className="jumbotron">
            <Container>
                <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px" >
                    <h1 className="hero-title">
                        Hi, I'm {' '}
                        <span className="text-color-main">{hero_data.name}</span>
                        <br / >
                        Software Engineer
                    </h1>
                </Fade>
            </Container>
        </section>
    )
}