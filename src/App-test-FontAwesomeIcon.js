import React from 'react' ;
import './App.css' ;

import fontawesome from '@fortawesome/fontawesome' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faHome, faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid' ;


// fontawesome.library.add( faCheckSquare, faCoffee ) ;

function App () {
    return (
        <div className="App">
            <FontAwesomeIcon icon={ [ 'fa', 'check-square' ] } />
            <FontAwesomeIcon icon={ [ 'fa', 'coffee' ] } />
            <FontAwesomeIcon icon={ faHome } />
            <FontAwesomeIcon icon="coffee" />
            <h1 className="title is-1"><i className="fa fa-home"></i> ¡Hola!</h1>
            
        </div>
    ) ;
}

export default App ;
