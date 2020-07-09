import React, { useState } from 'react' ;
import Hero from './components/Hero' ;

import { data } from  './data' ;
import DateFilter from './components/DateFilter' ;
import OptionsFilter from './components/OptionsFilter' ;
import Filters from './components/Filters' ;

const initialValuesFilter = {
    dateFrom: data.today,
    dateTo: new Date( data.today.valueOf() + 86400000 ),
    country: undefined,
    price: undefined,
    rooms: undefined
} ;

const optionFilterDefaultValue = [
    { value: undefined, name: 'Cualquier tamaño' },
    { value: 10, name: 'Hotel pequeño' },
    { value: 20, name: 'Hotel mediano' },
    { value: 30, name: 'Hotel grande' }
] ;

function App () {
    
    
    const [ filter, setFilter ] = useState( initialValuesFilter ) ;
    const [ optionFilterValue, setOptionFilterValue ] = useState( optionFilterDefaultValue ) ;
    return (
        <>
            <Hero
                { ...filter }
            />
            <Filters
                filters={ filter }
            />
        </>
    ) ;
}

export default App ;
