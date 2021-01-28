import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Instructions from './Instructions';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

import './Battle.css';

class Battle extends Component {
  state = {
    playerOne: null,
    playerTwo: null
  };

  handlePlayerSubmit = (id, playerName) => {
    this.setState({
      [id]: playerName
    })
  };

  handleReset = (id) => {
    this.setState({
      [id]: null
    })
  };

  render() {
    const { playerOne, playerTwo } = this.state;

    return (
      <React.Fragment>
        <Instructions />
        <div className="players-container">
          <h1 className="center-text header-lg">Players</h1>
          <div className="row space-around">
            {!playerOne ?
              <PlayerInput
                label="Player One"
                onSubmit={(playerName) => this.handlePlayerSubmit('playerOne', playerName)}
              />
              : <PlayerPreview
                userName={playerOne}
                label="Player One"
                onReset={() => this.handleReset('playerOne')}
              />
            }
            {!playerTwo ?
              <PlayerInput
                label="Player Two"
                onSubmit={(playerName) => this.handlePlayerSubmit('playerTwo', playerName)}
              />
              : <PlayerPreview
                userName={playerTwo}
                label="Player Two"
                onReset={() => this.handleReset('playerTwo')}
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
}

export default Battle;