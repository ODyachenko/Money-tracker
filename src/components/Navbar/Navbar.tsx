import { useState } from 'react';
import NavItem from './NavItem';
import CircleMenu from './CircleMenu';
import './style.scss';

const navLinks = [
  {
    id: 0,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fill="#C6C6C6"
          d="M23.67 9.55998L21.67 7.73998L14 0.779984C13.45 0.28803 12.738 0.0160522 12 0.0160522C11.2621 0.0160522 10.55 0.28803 10 0.779984L2.35002 7.77998L0.350019 9.59999C0.215344 9.73664 0.122823 9.90914 0.0834928 10.0969C0.0441625 10.2847 0.0596837 10.4799 0.128204 10.6591C0.196725 10.8383 0.315353 10.994 0.469935 11.1076C0.624518 11.2213 0.80853 11.288 1.00002 11.3C1.25331 11.2885 1.49279 11.1813 1.67002 11L2.00002 10.7V21C2.00002 21.7956 2.31609 22.5587 2.8787 23.1213C3.44131 23.6839 4.20437 24 5.00002 24H19C19.7957 24 20.5587 23.6839 21.1213 23.1213C21.6839 22.5587 22 21.7956 22 21V10.74L22.33 11.04C22.5134 11.2067 22.7522 11.2993 23 11.3C23.2016 11.2995 23.3984 11.238 23.5645 11.1237C23.7305 11.0093 23.8582 10.8475 23.9306 10.6593C24.0031 10.4712 24.017 10.2655 23.9704 10.0693C23.9239 9.87314 23.8192 9.6956 23.67 9.55998Z"
        />
      </svg>
    ),
    caption: 'Home',
    path: '/',
  },
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="22"
        viewBox="0 0 28 22"
        fill="none"
      >
        <path
          d="M18.1301 12.93V13.93C18.1301 14.5866 18.0007 15.2368 17.7495 15.8434C17.4982 16.4501 17.1299 17.0013 16.6656 17.4656C16.2013 17.9299 15.6501 18.2982 15.0435 18.5494C14.4369 18.8007 13.7867 18.93 13.1301 18.93H9.87007C9.85465 19.4769 9.68997 20.0092 9.39386 20.4692C9.09775 20.9292 8.68147 21.2995 8.19007 21.54C7.78024 21.7448 7.32822 21.851 6.87007 21.85C6.19234 21.8541 5.53322 21.6285 5.00007 21.21L1.29007 18.3C0.928742 18.0196 0.636313 17.6603 0.435145 17.2495C0.233976 16.8387 0.129395 16.3874 0.129395 15.93C0.129395 15.4727 0.233976 15.0213 0.435145 14.6106C0.636313 14.1998 0.928742 13.8405 1.29007 13.56L5.00007 10.65C5.44707 10.2933 5.98673 10.0717 6.55545 10.0115C7.12417 9.95126 7.69826 10.0548 8.21007 10.31C8.8916 10.636 9.41647 11.2184 9.67007 11.93H17.1001C17.2339 11.926 17.3672 11.9489 17.492 11.9974C17.6168 12.0458 17.7306 12.1188 17.8267 12.2121C17.9227 12.3054 17.9991 12.417 18.0512 12.5403C18.1033 12.6636 18.1301 12.7961 18.1301 12.93Z"
          fill="#C6C6C6"
        />
        <path
          d="M27.8701 6.07001C27.8702 6.52734 27.7657 6.97863 27.5647 7.3894C27.3636 7.80016 27.0713 8.15952 26.7101 8.44001L23.0001 11.35C22.4595 11.7701 21.7947 11.9987 21.1101 12C20.652 12.0009 20.2 11.8948 19.7901 11.69C19.1086 11.364 18.5837 10.7817 18.3301 10.07H10.8701C10.6049 10.07 10.3505 9.96466 10.163 9.77712C9.97547 9.58959 9.87012 9.33523 9.87012 9.07001V8.07001C9.87012 6.74393 10.3969 5.47216 11.3346 4.53448C12.2723 3.5968 13.544 3.07001 14.8701 3.07001H18.1301C18.1423 2.51096 18.3105 1.96644 18.6157 1.4979C18.9209 1.02935 19.351 0.655434 19.8574 0.418337C20.3638 0.181241 20.9264 0.0904046 21.4817 0.156079C22.0371 0.221754 22.563 0.441325 23.0001 0.790015L26.7101 3.70001C27.0713 3.98051 27.3636 4.33987 27.5647 4.75063C27.7657 5.1614 27.8702 5.61269 27.8701 6.07001Z"
          fill="#C6C6C6"
        />
      </svg>
    ),
    caption: 'Transaction',
    path: '/transaction',
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M24 11H13V0C15.8412 0.228368 18.5083 1.46063 20.5239 3.47614C22.5394 5.49166 23.7716 8.1588 24 11Z"
          fill="#C6C6C6"
        />
        <path
          d="M24 13C23.801 15.2756 22.9566 17.4471 21.566 19.2594C20.1754 21.0716 18.2965 22.4493 16.15 23.2306C14.0035 24.0119 11.6786 24.1643 9.44844 23.6699C7.2183 23.1755 5.1756 22.0549 3.56038 20.4396C1.94515 18.8244 0.82449 16.7817 0.330092 14.5516C-0.164306 12.3214 -0.011906 9.99652 0.769384 7.85001C1.55067 5.7035 2.92839 3.82457 4.74065 2.43401C6.55292 1.04346 8.72442 0.199045 11 0V12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13H24Z"
          fill="#C6C6C6"
        />
      </svg>
    ),
    caption: 'Budget',
    path: '/budget',
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="24"
        viewBox="0 0 20 24"
        fill="none"
      >
        <path
          d="M10 12.07C13.3137 12.07 16 9.38372 16 6.07001C16 2.7563 13.3137 0.0700073 10 0.0700073C6.68629 0.0700073 4 2.7563 4 6.07001C4 9.38372 6.68629 12.07 10 12.07Z"
          fill="#C6C6C6"
        />
        <path
          d="M13 14H7C5.14348 14 3.36301 14.7375 2.05025 16.0503C0.737498 17.363 0 19.1435 0 21C0 21.7956 0.316071 22.5587 0.87868 23.1213C1.44129 23.6839 2.20435 24 3 24H17C17.7956 24 18.5587 23.6839 19.1213 23.1213C19.6839 22.5587 20 21.7956 20 21C20 19.1435 19.2625 17.363 17.9497 16.0503C16.637 14.7375 14.8565 14 13 14Z"
          fill="#C6C6C6"
        />
      </svg>
    ),
    caption: 'Profile',
    path: '/profile',
  },
];

export default function Navbar() {
  const [activeLink, setActiveLink]: React.ComponentState = useState(0);

  return (
    <nav className="nav">
      <ul className="nav__list">
        {navLinks.map((link) => {
          return (
            <NavItem
              key={link.id}
              {...link}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
          );
        })}
      </ul>
      <CircleMenu />
    </nav>
  );
}
