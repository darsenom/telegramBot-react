import { Link } from 'react-router-dom';

export const MainPage = () => (
    <nav>
      <ul>
        <li>
          <Link to="/first">Page One</Link>
        </li>
        <li>
          <Link to="/two">Page Two</Link>
        </li>
        <li>
          <Link to="/three">Page Three</Link>
        </li>
      </ul>
    </nav>
  );