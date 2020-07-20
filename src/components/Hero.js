import React from 'react' ;
import moment from 'moment' ;

function Hero ( { filter } ) {
    return (
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Hoteles</h1>
                    <h2 className="subtitle">
                        desde el <strong>
                            { moment( filter.dateFrom ).format( 'LL' ) }
                        </strong> hasta el <strong>{ moment( filter.dateTo ).format( 'LL' )  }
                        </strong>
                        { filter.country ? ` en ${filter.country}` : '' }
                        { filter.price && !( filter.price === 'Cualquier precio' ) ? ` por ${'$'.repeat( filter.price ) }` : '' }
                        { filter.rooms && !( filter.rooms === 'Cualquier tamaño' ) ? ` de hasta ${filter.rooms} habitaciones` : '' }
                    </h2>
                </div>
            </div>
        </section>
    ) ;
}

export default Hero ;