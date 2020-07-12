import React from 'react' ;

function Hero ( { filter } ) {
    const optionsDate = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    } ;
    return (
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Hoteles</h1>
                    <h2 className="subtitle">
                        desde el <strong>
                            { filter.dateFrom.toLocaleDateString( 'es-AR', optionsDate ) }
                        </strong> hasta el <strong>{ filter.dateTo.toLocaleDateString( 'es-AR', optionsDate ) }
                        </strong>
                        { filter.country ? ` en ${filter.country}` : '' }
                        { filter.price ? ` por ${'$'.repeat( filter.price ) }` : '' }
                        { filter.rooms ? ` de hasta ${filter.rooms} habitaciones` : '' }
                    </h2>
                </div>
            </div>
        </section>
    ) ;
}

export default Hero ;