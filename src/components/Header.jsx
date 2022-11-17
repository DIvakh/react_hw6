import { NavLink } from 'react-router-dom';
const navLinks = [
  { pageName: 'Home', path: '/' },
  { pageName: 'Battle', path: '/battle' },
  { pageName: 'Popular', path: '/popular' }
];
export default function Header() {
  return (
    <header>
      <nav>
        {navLinks.map((navLink) => (
          <NavLink
            key={navLink.pageName}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            to={navLink.path}
            end
          >
            {navLink.pageName}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
