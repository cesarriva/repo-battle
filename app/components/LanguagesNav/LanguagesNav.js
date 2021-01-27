import React from 'react';
import PropTypes from 'prop-types';

import './LanguagesNav.css';

const LanguagesNav = ({ selectedLanguage, onUpdateSelectedLanguage }) => {
  const popularLanguages = ['All', 'Javascript', 'Ruby', 'Java', 'C#', 'Python'];

  return (
    <div className="flex-center">
      {popularLanguages.map(language => (
        <li key={language}>
          <button
            className="btn-clear nav-link"
            style={language === selectedLanguage ? { color: 'rgb(187, 46, 31)' } : null}
            onClick={() => onUpdateSelectedLanguage(language)}>
            {language}
          </button>
        </li>
      ))}
    </div>
  );
};

LanguagesNav.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onUpdateSelectedLanguage: PropTypes.func.isRequired
}

export default LanguagesNav;