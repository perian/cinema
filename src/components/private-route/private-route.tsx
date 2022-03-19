import {Navigate} from 'react-router-dom';

type PrivateRouteProps = {
  children: JSX.Element;
}

const authorizationStatus = true;

function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  return (
    authorizationStatus
      ? children
      : <Navigate to="*" />
  );
}

export default PrivateRoute;
