import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddReview from '../add-review/add-review';
import Film from '../film/film';
import MainScreen from '../main-screen/main-screen';
import MyList from '../my-list/my-list';
import PageNotFound from '../page-not-found/page-not-found';
import Player from '../player/player';
import PrivateRoute from '../private-route/private-route';
import SignIn from '../sign-in/sign-in';

type Genre = {
  href: string;
  name: string;
}

type AppScreenProps = {
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmYear: number;
  catalogGenres: Genre[];
}

function App({promoFilmTitle, promoFilmGenre, promoFilmYear, catalogGenres}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={
          <MainScreen
            promoFilmTitle={promoFilmTitle}
            promoFilmGenre={promoFilmGenre}
            promoFilmYear={promoFilmYear}
            catalogGenres={catalogGenres}
          />
        }
        />
        <Route path='/login' element={<SignIn />} />
        <Route
          path='/mylist'
          element={
            <PrivateRoute>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path='/films/:id' element={<Film />} />
        <Route path='/films/:id/review' element={<AddReview />} />
        <Route path='/player/:id' element={<Player />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
