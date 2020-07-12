import React from 'react' ;
import Tag from './Tag' ;

function Hotel ( { hotel } ) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={ hotel.photo } alt="Sainte Jeanne Boutique & Spa" />
                </figure>
            </div>
            <div className="card-content">
                <p className="title is-4">{ hotel.name }</p>
                <p>{ hotel.description }</p>
                <div className="field is-grouped is-grouped-multiline" style={ { marginTop: '1em' } }>
                    <Tag
                        icons={ [ { name:'fa-map-marker' } ] }
                        text={ `${hotel.city}, ${hotel.country}` }
                    />
                    <Tag
                        icons={ [ { name:'fa-bed' } ] }
                        text={ `${ hotel.rooms } Habitaciones` }
                    />
                    <Tag
                        icons={ [
                            { name:'fa-dollar-sign' },
                            { name:'fa-dollar-sign' },
                            { name:'fa-dollar-sign', style:{ opacity: '.25' } },
                            { name:'fa-dollar-sign', style:{ opacity: '.25' } },
                        ] }
                    />
                </div>
            </div>
            <div className="card-footer">
                <a href="javascript:alert('No implementamos esto aún :(')" className="card-footer-item has-background-primary has-text-white has-text-weight-bold">Reservar</a>
            </div>
        </div>
    ) ;
}

export default Hotel ;