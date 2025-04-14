import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../const/auth';
import { AppRoute } from '../../const/routes';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {

  children: JSX.Element;
};
function PrivateRouteComponent(props: PrivateRouteProps): JSX.Element {
  const { children } = props;
  const authorizationStatus = useAppSelector((state)=>state.authorizationStatus);
  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
}

export { PrivateRouteComponent };
