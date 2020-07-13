import React, { useState, useEffect } from 'react' ;
import moment from 'moment' ;
import Hero from './components/Hero' ;
import Filters from './components/Filters' ;
import Hotels from './components/Hotels' ;
import { data } from  './data' ;
import  './config/momentConfig' ;

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

    useEffect( () => {
        let filteredHotels = data.hotelsData ;

        filteredHotels = filteredHotels.filter( hotel => {
            return (
                moment( hotel.availabilityFrom ).isSameOrBefore( filter.dateFrom, 'D' ) &&
                moment( hotel.availabilityTo ).isSameOrAfter( filter.dateTo, 'D' )
            ) ; 
        } ) ;

        // filteredHotels = filteredHotels.filter( hotel =>  moment( hotel.availabilityFrom ).isSameOrBefore( filter.dateFrom, 'D' )  ) ;

        // filteredHotels = filteredHotels.filter( hotel =>  moment( hotel.availabilityTo ).isSameOrAfter( filter.dateTo, 'D' )  ) ;

        if ( filter.price && !( filter.price === 'Cualquier precio' ) ) {
            filteredHotels = filteredHotels.filter( hotel => hotel.price === parseInt( filter.price ) ) ;
        }

        if ( filter.country && !( filter.country === 'Todos los países' ) ) {
            filteredHotels = filteredHotels.filter( hotel => hotel.country === filter.country ) ;
        }

        if ( filter.rooms && !( filter.rooms === 'Cualquier tamaño' ) ) {

            switch ( filter.rooms ) {
                case '10':
                    filteredHotels = filteredHotels.filter( hotel => hotel.rooms <= 10 ) ;
                    break ;
            
                case '20':
                    filteredHotels = filteredHotels.filter( hotel => hotel.rooms > 10 && hotel.rooms <= 20 ) ;
                    break ;
            
                case '30':
                    filteredHotels = filteredHotels.filter( hotel => hotel.rooms > 20 ) ;
                    break ;
                default:
                    break ;
            }
        }

        // for ( const key in filter ) {
        //     if ( filter[key] )
        //         filteredHotels = filteredHotels.filter( hotel => hotel[key] == filter[key] ) ;
        // }

        setHotels( filteredHotels ) ;

    }, [ filter ] ) ;

    const handleChangeFilter = ( e ) => {

        const name = e.target.name ;
        const value = e.target.type === 'date' ? moment( e.target.value ) : e.target.value ;
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
