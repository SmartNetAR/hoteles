import React, { useState } from 'react' ;
import Hero from './components/Hero' ;

import { data } from  './data' ;
import Filters from './components/Filters' ;
import Hotels from './components/Hotels' ;

const initialValuesFilter = {
    dateFrom: data.today,
    dateTo: new Date( data.today.valueOf() + 86400000 ),
    country: undefined,
    price: undefined,
    rooms: undefined
} ;

function App () {
    
    const [ filter, setFilter ] = useState( initialValuesFilter ) ;
    const [ hotels, setHotels ] = useState( data.hotelsData ) ;

    const handleChangeFilter = ( e ) => {

        const name = e.target.name ;
        const value = e.target.type === 'date' ? new Date( e.target.value ) : e.target.value ;

        setFilter(
            {
                ...filter,
                [name]: value
            }
        ) ;
    } ;

    return (
        <>
            <Hero
                filter={ filter }
            />
            <Filters
                filters={ filter }
                handleChange={ handleChangeFilter }              
            />

            <Hotels
                hotels={ hotels }
            />
        </>
    ) ;
}

export default App ;
