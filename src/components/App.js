import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Badges from '../pages/Badges';
import Fibonacci from '../pages/fibonacci';
import Akelab from '../pages/Akelab';

function App(){
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/fibo" component={Fibonacci} />
            <Route exact path="/akelab" component={Akelab} />
            <Route exact path="/" component={Badges} />
        </Switch>
        </BrowserRouter>
    )
}


export default App;