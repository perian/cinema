import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/films';

const CatalogGenres = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
];

const Settings = {
  PROMO: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  YEAR: 2014,
  CATALOG_GENRES: CatalogGenres,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      promoFilmTitle={Settings.PROMO}
      promoFilmGenre={Settings.GENRE}
      promoFilmYear={Settings.YEAR}
      catalogGenres={Settings.CATALOG_GENRES}
      films={films}
    />
  </React.StrictMode>,
  document.getElementById('root'));
