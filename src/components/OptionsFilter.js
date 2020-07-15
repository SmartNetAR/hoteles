import React from 'react' ;

function OptionsFilter ( { options, selected, icon, name, onChange } ) {
    return (
        <div className="field">
            <div className="control has-icons-left">
                <div className="select" style={ { width: '100%' } }>
                    <select value={ selected } name={ name } onChange={ onChange } style={ { width: '100%' } }>
                        { options.map( option =>
                            <option key={ option.name } value={ option.value }>{ option.name }</option> 
                        ) }
                    </select>
                </div>
                <div className="icon is-small is-left">
                    <i className={ `fas ${icon}` }></i>
                </div>
            </div>
        </div>
    ) ;
}

export default OptionsFilter ;