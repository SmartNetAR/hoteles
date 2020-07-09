import React from 'react' ;
import fontawesome from '@fortawesome/fontawesome' ;
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import * as icons from '@fortawesome/fontawesome-free-solid' ;
// import { faHome, faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid' ;
// fontawesome.library.add( faCheckSquare, faCoffee ) ;

import DateFilter from './DateFilter' ;
import OptionsFilter from './OptionsFilter' ;

function Filters ( props ) {
    return (
        <nav className="navbar is-info" style={ { justifyContent: 'center' } }>
            <div className="navbar-item">
                <DateFilter
                    date={ props.filters.dateFrom }
                    icon="fa-sign-in-alt"
                />
            </div>
            <div className="navbar-item">
                <DateFilter
                    date={ props.filters.dateTo }
                    icon="fa-sign-out-alt" />
            </div>
            <div className="navbar-item">
                <OptionsFilter
                    options={ [ { value: undefined, name: 'Todos los países' }, { value: 'Argentina', name: 'Argentina' }, { value: 'Brasil', name: 'Brasil' }, { value: 'Chile', name: 'Chile' }, { value: 'Uruguay', name: 'Uruguay' } ] }
                    selected={ props.filters.country }
                    icon="fa-globe" />
            </div>
            <div className="navbar-item">
                <OptionsFilter
                    options={ [ { value: undefined, name: 'Cualquier precio' }, { value: 1, name: '$' }, { value: 2, name: '$$' }, { value: 3, name: '$$$' }, { value: 4, name: '$$$$' } ] }
                    selected={ props.filters.price }
                    icon="fa-dollar-sign" />
            </div>
            <div className="navbar-item">
                <OptionsFilter
                    options={ [ { value: undefined, name: 'Cualquier tamaño' }, { value: 10, name: 'Hotel pequeño' }, { value: 20, name: 'Hotel mediano' }, { value: 30, name: 'Hotel grande' } ] }
                    selected={ props.filters.rooms }
                    icon="fa-bed" />
            </div>
        </nav>
    ) ;
}

export default Filters ;