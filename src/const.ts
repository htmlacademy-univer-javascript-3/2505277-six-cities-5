enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const URL_MARKER_DEFAULT = 'public/img/pin.svg';
const URL_MARKER_ACTIVE = 'public/img/pin-active.svg';
export { AppRoute, AuthorizationStatus, URL_MARKER_ACTIVE, URL_MARKER_DEFAULT };
