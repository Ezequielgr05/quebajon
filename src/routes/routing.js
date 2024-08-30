import React from 'react';
import { BrowserRouter, Router, Switch, Route} from 'react-router-dom'

{/* Ejemplo de uso */}

const Routing = () => {
    return (
        <Router>
            {/* primero se pone el router */}
                {/* luego se pone el switch para que eliga las rutas */}
                <Route exact path='/' Component={logingPage}/> {/* se le pone el exact para que matchee con la ruta exacta, si no tuviera cuando matchee en este caso coincidiran todas. En el path va la ruta */}
        </Router>
    );
}

export default Routing;
