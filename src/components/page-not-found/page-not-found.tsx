import { Link } from 'react-router-dom';
import { AppRoutes } from '../../routes/routes';

function PageNotFound(): JSX.Element {
  return (
    <div className="page-not-found">
      <h1>404 Page  not found</h1>
      <Link to={AppRoutes.Main} about=".">
        На главную страницу
      </Link>
    </div>
  );
}

export default PageNotFound;
