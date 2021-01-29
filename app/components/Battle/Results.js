import React from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

import Card from '../Card/Card';
import ProfileList from './ProfileList';
import { battle } from '../../utils/api';
import Loading from '../Loading/Loading';

const resultsReducer = (state, action) => {
  switch (action.type) {
    case 'results-calculation-succeed':
      return {
        ...state,
        winner: action.players[0],
        loser: action.players[1],
        error: null,
        loading: false
      };

    case 'results-calculation-fail':
      return {
        ...state,
        error: action.message,
        loading: false
      };

    default:
      throw new Error('Action type not supported');
  }
};

const initialState = {
  winner: null,
  loser: null,
  error: null,
  loading: true
};

const Results = ({ location }) => {
  const { playerOne, playerTwo } = queryString.parse(location.search)
  const [state, dispatch] = React.useReducer(resultsReducer, initialState);

  React.useEffect(() => {
    battle([playerOne, playerTwo])
      .then(players => dispatch({ type: 'results-calculation-succeed', players }))
      .catch(({ message }) => dispatch({ type: 'results-calculation-fail', message }));
  }, [playerOne, playerTwo]);

  const { winner, loser, error, loading } = state;

  if (loading) {
    return <Loading />
  }

  if (error) {
    return (
      <p className='center-text error'>{error}</p>
    );
  }

  return (
    <React.Fragment>
      <div className='grid space-around container-sm'>
        <Card
          header={winner.score === loser.score ? 'Tie' : 'Winner'}
          subHeader={`Score: ${winner.score.toLocaleString()}`}
          avatar={winner.profile.avatar_url}
          href={winner.profile.html_url}
          name={winner.profile.login}
        >
          <ProfileList profile={winner.profile} />
        </Card>

        <Card
          header={winner.score === loser.score ? 'Tie' : 'Loser'}
          subHeader={`Score: ${loser.score.toLocaleString()}`}
          avatar={loser.profile.avatar_url}
          href={loser.profile.html_url}
          name={loser.profile.login}
        >
          <ProfileList profile={loser.profile} />
        </Card>
      </div>
      <Link
        className="btn btn-dark btn-space"
        to='/battle'>
        Reset
        </Link>
    </React.Fragment>
  );
}

export default Results;