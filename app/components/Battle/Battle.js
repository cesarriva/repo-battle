import React from 'react';
import { Link } from 'react-router-dom';

import Instructions from './Instructions';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

import './Battle.css';

const Battle = () => {
  const [playerOne, setPlayerOne] = React.useState(null);
  const [playerTwo, setPlayerTwo] = React.useState(null);

  return (
    <React.Fragment>
      <Instructions />
      <div className="players-container">
        <h1 className="center-text header-lg">Players</h1>
        <div className="row space-around">
          {!playerOne ?
            <PlayerInput
              label="Player One"
              onSubmit={(playerName) => setPlayerOne(playerName)}
            />
            : <PlayerPreview
              userName={playerOne}
              label="Player One"
              onReset={() => setPlayerOne(null)}
            />
          }
          {!playerTwo ?
            <PlayerInput
              label="Player Two"
              onSubmit={(playerName) => setPlayerTwo(playerName)}
            />
            : <PlayerPreview
              userName={playerTwo}
              label="Player Two"
              onReset={() => setPlayerTwo(null)}
            />
          }
        </div>
        {playerOne && playerTwo && (
          <Link
            className="btn btn-dark btn-space"
            to={{
              pathname: '/battle/results',
              search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`
            }}
          >
            Battle
          </Link>
        )}
      </div>

    </React.Fragment>
  );
}

export default Battle;