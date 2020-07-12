import React from 'react' ;

function Tag ( { icons, text } ) {
    const iconsStyles = { margin: '0 .125em' } ;
    return (
        <div className="control">
            <div className={ `tags${  text ? ' has-addons' : ''}` }>
                <span className="tag is-medium is-info">
                    { icons && icons.map( ( icon, index ) => (
                        <i
                            key={ index }
                            className={ `fas ${icon.name}` }
                            style={ icons.length > 1
                                ?  { ...iconsStyles, ...icon.style }
                                : icon.style
                            }
                        >
                        </i>
                    ) ) }
                </span>
                { text && ( <span className="tag is-medium">{ text }</span> ) }
            </div>
        </div>
    ) ;
}

export default Tag ;