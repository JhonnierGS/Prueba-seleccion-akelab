import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import BadgeNew from '../pages/BadgeNews';
import Badges from '../pages/Badges';
import Fibonacci from '../pages/fibonacci';
import Akelab from '../pages/Akelab';

function App(){
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/badges" component={Badges} />
            <Route exact path="/badges/new" component={BadgeNew} />
            <Route exact path="/badges/fibo" component={Fibonacci} />
            <Route exact path="/badges/akelab" component={Akelab} />
        </Switch>
        </BrowserRouter>
    )
}


export default App;