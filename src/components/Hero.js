import React from 'react' ;

function Hero ( { dateFrom, dateTo, country, price, rooms } ) {
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
                            { dateFrom.toLocaleDateString( 'es-AR', optionsDate ) }
                        </strong> hasta el <strong>{ dateTo.toLocaleDateString( 'es-AR', optionsDate ) }
                        </strong>
                        { country ? ` en ${country}` : '' }
                        { price ? ' por $$' : '' }
                        { rooms ? ` de hasta ${rooms} habitaciones` : '' }
                    </h2>
                </div>
            </div>
        </section>
    ) ;
}

export default Hero ;