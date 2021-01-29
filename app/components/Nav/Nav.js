import React from 'react';
import { NavLink } from 'react-router-dom';
import ThemeContext from '../../contexts/theme';

const activeStyle = {
  color: 'rgb(187, 46, 31)'
};

const Nav = ({ toggleTheme }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <nav className='row space-between'>

      <ul className='row nav'>
        <li >
          <NavLink
            exact
            activeStyle={activeStyle}
            to='/'
            className='nav-link'
          >
            Popular
              </NavLink>
        </li>
        <li >
          <NavLink
            activeStyle={activeStyle}
            to='/battle'
            className='nav-link'
          >
            Battle
              </NavLink>
        </li>
      </ul>

      <button
        style={{ fontSize: 30 }}
        className='btn-clear'
        onClick={toggleTheme}>
        {theme === 'light' ? '⚫' : '⚪'}
      </button>
    </nav>
  );
}

export default Nav;