import React from 'react';
import PropTypes from 'prop-types';
import ThemeContext from '../../contexts/theme';

import './PlayerInput.css';

const PlayerInput = ({ onSubmit, label }) => {
  const [username, setUsername] = React.useState('');
  const theme = React.useContext(ThemeContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(username);
  };

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <form className="column player" onSubmit={handleSubmit}>
      <label htmlFor="username" className="player-label">{label}</label>
      <div className="row player-inputs">
        <input
          type="text"
          id="username"
          className={`input-${theme}`}
          placeholder="github username"
          autoComplete="off"
          value={username}
          onChange={handleInputChange}
        />
        <button
          className={`btn ${theme === 'dark' ? 'light-btn' : 'dark-btn'}`}
          type="submit"
          disabled={!username}>
          Submit
        </button>
      </div>
    </form>
  );
}

PlayerInput.propTypes = {
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default PlayerInput;