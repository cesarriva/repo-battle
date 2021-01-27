import React, { Component } from 'react';
import Instructions from './Instructions';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';
import Results from './Results';

import './Battle.css';

class Battle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOne: null,
      playerTwo: null,
      battle: false
    };

    this.handlePlayerSubmit = this.handlePlayerSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.resetBattle = this.resetBattle.bind(this);
  }

  handlePlayerSubmit(id, playerName) {
    this.setState({
      [id]: playerName
    })
  }

  handleReset(id) {
    this.setState({
      [id]: null
    })
  }

  resetBattle() {
    this.setState({
      playerOne: null,
      playerTwo: null,
      battle: false
    });
  }

  render() {
    const { playerOne, playerTwo, battle } = this.state;

    if (battle) {
      return (
        <Results
          playerOne={playerOne}
          playerTwo={playerTwo}
          onReset={this.resetBattle} />)
    }

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
            <button
              className="btn btn-dark btn-space"
              onClick={() => this.setState({ battle: true })}>
              Battle
            </button>
          )}
        </div>

      </React.Fragment>
    );
  }
}

export default Battle;