import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './redux';
import { BrowserRouter } from 'react-router-dom';
import Router from './navigations';

import './App.css';

const store = createStore(reducer, compose(applyMiddleware(thunk)));

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
