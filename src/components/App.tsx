import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero/Hero'
import portfolio_data from '../Data/mock_data'
import About from '../components/About/About'
import ProjectSection from '../components/Project/ProjectSection'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

const App = () => {
    // load in the data to the 
    const {hero_data, about_data, project_section_data} = portfolio_data;
    console.log(hero_data)
    // now we use the global context to feed in the data

    return( 
        <div>
        <Hero {...hero_data}/>
        <About {...about_data}/>
        <ProjectSection {...project_section_data} />
        <Contact />
        <Footer />
        </div>
       
    )
}

export default  App;