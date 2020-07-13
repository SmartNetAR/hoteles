import React from 'react' ;
import DateFilter from './DateFilter' ;
import OptionsFilter from './OptionsFilter' ;
import '@fortawesome/fontawesome' ;
import '@fortawesome/fontawesome-free-solid' ;

function Filters ( { filters, handleChange } ) {
    return (
        <nav className="navbar is-info" style={ { justifyContent: 'center' } }>
            <div className="navbar-item">
                <DateFilter
                    date={ filters.dateFrom }
                    icon="fa-sign-in-alt"
                    name="dateFrom"
                    onChange={ handleChange }
                />
            </div>
            <div className="navbar-item">
                <DateFilter
                    date={ filters.dateTo }
                    icon="fa-sign-out-alt" 
                    name="dateTo"
                    onChange={ handleChange }
                />                    
            </div>
            <div className="navbar-item">
                <OptionsFilter
                    options={ [ { value: undefined, name: 'Todos los países' }, { value: 'Argentina', name: 'Argentina' }, { value: 'Brasil', name: 'Brasil' }, { value: 'Chile', name: 'Chile' }, { value: 'Uruguay', name: 'Uruguay' } ] }
                    selected={ filters.country }
                    icon="fa-globe"
                    name="country"
                    onChange={ handleChange }
                />
            </div>
            <div className="navbar-item">
                <OptionsFilter
                    options={ [ { value: undefined, name: 'Cualquier precio' }, { value: 1, name: '$' }, { value: 2, name: '$$' }, { value: 3, name: '$$$' }, { value: 4, name: '$$$$' } ] }
                    selected={ filters.price }
                    icon="fa-dollar-sign"
                    name="price"
                    onChange={ handleChange }
                />
            </div>
            <div className="navbar-item">
                <OptionsFilter
                    options={ [ { value: undefined, name: 'Cualquier tamaño' }, { value: 10, name: 'Hotel pequeño' }, { value: 20, name: 'Hotel mediano' }, { value: 30, name: 'Hotel grande' } ] }
                    selected={ filters.rooms }
                    icon="fa-bed"
                    name="rooms"
                    onChange={ handleChange }
                />
            </div>
        </nav>
    ) ;
}

export default Filters ;