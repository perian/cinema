import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const CatalogGenres = [
  {
    href: 'all',
    name: 'All genres',
  },
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
    />
  </React.StrictMode>,
  document.getElementById('root'));
