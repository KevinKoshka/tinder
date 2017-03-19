import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//Redux se usa para el manejo de estados de la aplicación en un mismo objeto, el cual no puede ser cambiado
//directamente. En otras palabras Redux maneja los estados (datos) y React maneja las vistas.

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
