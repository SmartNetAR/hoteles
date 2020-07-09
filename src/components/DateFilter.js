import React from 'react' ;
import moment from 'moment' ;

function DateFilter ( { date, icon } ) {
    return (
        <div className="field">
            <div className="control has-icons-left">
                <input className="input" type="date" value={ moment( date ).format( 'YYYY-MM-DD' ) } />
                <span className="icon is-small is-left">
                    <i className={ `fas ${icon}` }></i>
                </span>
            </div>
        </div>
    ) ;
}

export default DateFilter ;