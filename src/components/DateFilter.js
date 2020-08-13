import React from 'react' ;
import PropTypes from 'prop-types' ;
import moment from 'moment' ;

function DateFilter ( { date, icon, name, onChange } ) {
    return (
        <div className="field">
            <div className="control has-icons-left">
                <input className="input" type="date" name={ name } value={ moment( date ).format( 'YYYY-MM-DD' ) } onChange={ onChange } />
                <span className="icon is-small is-left">
                    <i className={ `fas ${icon}` }></i>
                </span>
            </div>
        </div>
    ) ;
}

DateFilter.propTypes = {
    icon: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
} ;

DateFilter.defaultProps = {
    icon: 'fa-sign-in-alt',
} ;

export default DateFilter ;