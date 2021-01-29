import React from 'react';

import LanguagesNav from '../LanguagesNav/LanguagesNav';
import RepositoriesGrid from '../RepositoriesGrid/RepositoriesGrid';
import { fetchPopularRepositories } from '../../utils/api';
import Loading from '../Loading/Loading';

const popularReducer = (state, action) => {
  switch (action.type) {
    case 'fetch-success':
      return {
        ...state,
        [action.selectedLanguage]: action.repositories
      };

    case 'fetch-error':
      return {
        ...state,
        error: action.error.message
      };

    default:
      throw new Error('Action type not supported.');
  }
};

const initialState = {
  error: null
};

const Popular = () => {
  const [selectedLanguage, setSelectedLanguage] = React.useState('All');
  const [state, dispatch] = React.useReducer(
    popularReducer,
    initialState
  );
  const fetchedLanguages = React.useRef([]);

  React.useEffect(() => {
    if (!fetchedLanguages.current.includes(selectedLanguage)) {
      fetchedLanguages.current.push(selectedLanguage);

      fetchPopularRepositories(selectedLanguage)
        .then(repositories => dispatch({ type: 'fetch-success', selectedLanguage, repositories }))
        .catch(error => dispatch({ type: 'fetch-error', error }));
    }
  }, [fetchedLanguages, selectedLanguage]);

  const isLoading = () => {
    return !state[selectedLanguage] && !state.error;
  };

  return (
    <React.Fragment>
      <LanguagesNav
        selectedLanguage={selectedLanguage}
        onUpdateSelectedLanguage={setSelectedLanguage}
      />

      {isLoading() && <Loading text="Fetching repositories" />}
      {state.error && <p className='center-text error'>{state.error}</p>}

      {state[selectedLanguage] && <RepositoriesGrid repositories={state[selectedLanguage]} />}
    </React.Fragment>
  );
}

export default Popular;