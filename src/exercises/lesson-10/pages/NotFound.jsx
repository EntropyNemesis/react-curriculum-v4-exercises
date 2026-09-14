import { Link, useLocation } from 'react-router';

export default function NotFound() {
  const BASE = '/lessons/lesson-10';
  const { pathname } = useLocation();

  return (
    <section>
      <h2>404: Not Found</h2>
      <p>
        <strong>{pathname}</strong> is not a known page on this website.
      </p>
      <div>
        <Link to={BASE}>Go Home</Link>
      </div>
    </section>
  );
}
