import { Link } from 'react-router-dom';
function NotFoundScreen(): JSX.Element {
  return (
    <section>
      <h1>404.PAGE NOT FOUND</h1>
      <Link to="/">Вернуться на главную страницу</Link>
    </section>
  );
}

export { NotFoundScreen };
