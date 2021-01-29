import React from 'react';
import PropTypes from 'prop-types';
import { FaTimesCircle } from 'react-icons/fa';
import ThemeContext from '../../contexts/theme';

import './PlayerPreview.css';

const PlayerPreview = ({ userName, onReset, label }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <div className="columns player">
      <h3 className="player-label">{label}</h3>
      <div className={`row bg-${theme}`}>
        <div className="player-info">
          <img
            className="avatar-small"
            src={`https://github.com/${userName}.png?size=200`}
            alt={`Avatar for ${userName}`}
          />
          <a
            href={`https://github.com/${userName}`}
            className="link" >
            {userName}
          </a>
        </div>
        <button className="btn-clear flex-center" onClick={onReset}>
          <FaTimesCircle color="rgb(194, 57, 42)" size={26} />
        </button>
      </div>
    </div>
  );
};

PlayerPreview.propTypes = {
  userName: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default PlayerPreview;