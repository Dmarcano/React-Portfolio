import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero/Hero'
import {PortfolioProvider} from '../context/context'
import portfolio_data from '../Data/mock_data'

const App = () => {
    // load in the data to the 
    const {hero_data} = portfolio_data;
    console.log(hero_data)
    // now we use the global context to feed in the data

    return( 
        <div>
        <Hero {...hero_data}/>
        </div>
       
    )
}

export default  App;