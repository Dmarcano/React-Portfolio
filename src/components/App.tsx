import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero/Hero'
import {PortfolioProvider} from '../context/context'
import portfolio_data from '../Data/mock_data'
import About from '../components/About/About'

const App = () => {
    // load in the data to the 
    const {hero_data, about_data} = portfolio_data;
    console.log(hero_data)
    // now we use the global context to feed in the data

    return( 
        <div>
        <Hero {...hero_data}/>
        <About {...about_data}/>
        </div>
       
    )
}

export default  App;