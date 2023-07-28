import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type LinkType = {
  id: number;
  icon: ReactNode;
  caption: string;
  path: string;
  activeLink: any;
  setActiveLink: any;
};

export default function NavItem({
  id,
  icon,
  caption,
  path,
  activeLink,
  setActiveLink,
}: LinkType) {
  return (
    <li
      className={`nav__list-item ${activeLink === id ? 'active' : ''}`}
      onClick={() => setActiveLink(id)}
    >
      <NavLink to={path}>
        <figure className="nav__list-ico">{icon}</figure>
        <span className="nav__list-caption">{caption}</span>
      </NavLink>
    </li>
  );
}
