import { ReactNode } from 'react';

type LinkType = {
  id: number;
  icon: ReactNode;
  caption: string;
  activeLink: any;
  setActiveLink: any;
};

export default function NavLink({
  id,
  icon,
  caption,
  activeLink,
  setActiveLink,
}: LinkType) {
  return (
    <li
      className={`nav__list-item ${activeLink === id ? 'active' : ''}`}
      onClick={() => setActiveLink(id)}
    >
      <figure className="nav__list-ico">{icon}</figure>
      <span className="nav__list-caption">{caption}</span>
    </li>
  );
}
