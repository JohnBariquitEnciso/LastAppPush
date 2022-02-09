import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';


const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];



const store = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )(createStore)(reducers);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


