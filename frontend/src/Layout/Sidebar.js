import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Color from "../constant/Color";

const navList = [
  { path: "/", name: "Home" },
  { path: "/saved-profiles", name: "Profiles" },
];

const Sidebar = () => {
  return (
    <Header>
      <div className="header-content">
        <h1>devfinder</h1>
        <Navigation>
          <ul>
            {navList.map((navItem) => (
              <li key={navItem.path}>
                <NavLink to={navItem.path}>{navItem.name}</NavLink>
              </li>
            ))}
          </ul>
        </Navigation>
      </div>
    </Header>
  );
};

const Header = styled.header`
  padding: 1rem 2rem;
  border-bottom: 1px solid ${Color.backgroundGray};

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    line-height: 1;
    padding: 0;
    display: flex;
    align-items: center;
  }

  h1::before {
    content: url('/logo.svg');
    margin-right: 0.5rem;
  }
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex; /* Make the ul a flex container */
    align-items: center; /* Align items vertically in the center */
    gap: 1rem; /* Space between nav items */
  }

  li {
    margin: 0; /* Remove margin so li doesn't affect layout */
  }

  a {
    text-decoration: none;
    padding: 0.5rem;
    border-radius: 8px;
    color: inherit;
    transition: background-color 0.3s;
  }

  a.active {
    color: ${Color.tertiaryText}; /* Change text color on active state */
  }
`;

export default Sidebar;
