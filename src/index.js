import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import App from './components/App'
import reducers from './reducers';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

const store = createStore (
    reducers,//todos los reducer
    {},// estado inicial
    applyMiddleware(reduxThunk)
)

const container = document.getElementById('app');

ReactDOM.render(
    <Provider store={ store }>
        <App /> 
    </Provider>,
    container
);