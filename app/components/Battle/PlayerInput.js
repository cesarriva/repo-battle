import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PlayerInput.css';

class PlayerInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.username);
  }

  handleInputChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    return (
      <form className="column player" onSubmit={this.handleSubmit}>
        <label htmlFor="username" className="player-label">{this.props.label}</label>
        <div className="row player-inputs">
          <input
            type="text"
            id="username"
            className="input-light"
            placeholder="github username"
            autoComplete="off"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
          <button
            className="btn btn-dark"
            type="submit"
            disabled={!this.state.username}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}

PlayerInput.propTypes = {
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default PlayerInput;