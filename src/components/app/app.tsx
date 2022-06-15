import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddReview from '../review/add-review';
import MainScreen from '../main-screen/main-screen';
import MyList from '../my-list/my-list';
import PageNotFound from '../page-not-found/page-not-found';
import Player from '../player/player';
import PrivateRoute from '../private-route/private-route';
import SignIn from '../sign-in/sign-in';
import { Films } from '../../types/film';
import FilmScreen from '../film-screen/film-screen';
import { AppRoutes } from '../../const';

type AppScreenProps = {
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmYear: number;
  films: Films;
}

function App(props: AppScreenProps): JSX.Element {
  const { promoFilmTitle, promoFilmGenre, promoFilmYear, films } = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={
          <MainScreen
            promoFilmTitle={promoFilmTitle}
            promoFilmGenre={promoFilmGenre}
            promoFilmYear={promoFilmYear}
            films={films}
          />
        }
        />
        <Route path={AppRoutes.SignIn} element={<SignIn />} />
        <Route
          path={AppRoutes.MyList}
          element={
            <PrivateRoute>
              <MyList films={films} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoutes.Film} element={<FilmScreen films={films} />} />
        <Route path={AppRoutes.AddReview} element={<AddReview films={films} />} />
        <Route path={AppRoutes.Player} element={<Player films={films} />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
