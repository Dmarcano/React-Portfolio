import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './About/About'
import {PortfolioProvider} from '../context/context'
import portfolio_data from '../Data/mock_data'

const App = () => {
    // load in the data to the 
    const {hero_data} = portfolio_data;
    // now we use the global context to feed in the data
    const [hero, setHero] = useState({});

    useEffect( () => {
        setHero({...hero_data})
    })

    return( 
        <PortfolioProvider value={{ hero}}>
            <Hero />
            Welcome to the app
        </PortfolioProvider>
    )
}

export default  App;