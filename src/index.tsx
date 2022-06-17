import { createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { films } from './mocks/films';
import { reducer } from './store/reducer';

const Settings = {
  PROMO: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  YEAR: 2014,
};

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        promoFilmTitle={Settings.PROMO}
        promoFilmGenre={Settings.GENRE}
        promoFilmYear={Settings.YEAR}
        films={films}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
