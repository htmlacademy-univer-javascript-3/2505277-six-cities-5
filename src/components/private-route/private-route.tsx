import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../const/auth';
import { AppRoute } from '../../const/routes';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
};
function PrivateRouteComponent(props: PrivateRouteProps): JSX.Element {
  const { authorizationStatus, children } = props;

  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
}

export { PrivateRouteComponent };
