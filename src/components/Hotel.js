import React from 'react' ;
import Tag from './Tag' ;

function Hotel ( { data } ) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={ data.photo } alt={ data.name } />
                </figure>
            </div>
            <div className="card-content">
                <p className="title is-4">{ data.name }</p>
                <p>{ data.description }</p>
                <div className="field is-grouped is-grouped-multiline" style={ { marginTop: '1em' } }>
                    <Tag icons={ [ { name:'fa-map-marker' } ] } >{ data.city }, { data.country }</Tag>
                    <Tag icons={ [ { name:'fa-bed' } ] } >{ data.rooms } Habitaciones</Tag>
                    <Tag
                        icons={ Array.from( { length: 4 } )
                            .fill( { name:'fa-dollar-sign' }, 0, data.price )
                            .fill( { name:'fa-dollar-sign', style:{ opacity: '.25' } }, data.price, 4 )  
                        }
                    />
                </div>
            </div>
            <div className="card-footer">
                <a onClick={ () => alert( 'No implementamos esto aún :(' ) } className="card-footer-item has-background-primary has-text-white has-text-weight-bold">
                    Reservar
                </a>
            </div>
        </div>
    ) ;
}

export default Hotel ;