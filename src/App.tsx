import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import './App.css';

const store = createStore(reducer, compose(applyMiddleware(thunk)));

function App() {
  return <Provider store={store}>Hello world</Provider>;
}

export default App;
