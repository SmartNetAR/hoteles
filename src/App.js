import React, { useState } from 'react' ;
import Hero from './components/Hero' ;
import './App.css' ;

import fontawesome from '@fortawesome/fontawesome' ;
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import * as icons from '@fortawesome/fontawesome-free-solid' ;
// import { faHome, faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid' ;


// fontawesome.library.add( faCheckSquare, faCoffee ) ;

const initialValuesFilter = {
    dateFrom: new Date(),
    dateTo: new Date(),
    country: undefined,
    price: undefined,
    rooms: undefined
} ;

function App () {
    const [ filter, setFilter ] = useState( initialValuesFilter ) ;
    return (
        <>
            <Hero
                { ...filter }
            />
            <h1 className="title is-1"><i className="fas fa-home"></i> ¡Hola!</h1>
        </>
    ) ;
}

export default App ;
