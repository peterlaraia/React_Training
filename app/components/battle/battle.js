import React from 'react';
import { Link } from 'react-router-dom';

import { PlayerInput } from './player-input';
import { PlayerPreview } from './player-preview';

export class Battle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playerOneName: '',
      playerTwoName: '',
      playerOneImg: undefined,
      playerTwoImg: undefined
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(id, username) {
    this.setState(() => {
      const newState = {};
      newState[id + 'Name'] = username;
      newState[id + 'Img'] = 'https://github.com/' + username + '.png?size=200';
      return newState;
    });
  }

  handleReset(id) {
    this.setState(() => {
      const newState = {};
      newState[id + 'Name'] = '';
      newState[id + 'Img'] = undefined;
      return newState;
    });
  }

  render() {
    const match = this.props.match;
    const playerOneName = this.state.playerOneName;
    const playerTwoName = this.state.playerTwoName;
    const playerOneImg = this.state.playerOneImg;
    const playerTwoImg = this.state.playerTwoImg;

    return (
      <div>
        <div className='row'>
          {playerOneName ?
            <PlayerPreview avatar={playerOneImg} username={playerOneName} onReset={this.handleReset}>
              <button className='reset-btn' onClick={this.handleReset.bind(null, 'playerOne')}>Reset</button>
            </PlayerPreview> :
            <PlayerInput id='playerOne' label='Player One' onSubmit={this.handleSubmit} />}
          {playerTwoName ?
            <PlayerPreview avatar={playerTwoImg} username={playerTwoName} onReset={this.handleReset}>
              <button className='reset-btn' onClick={this.handleReset.bind(null, 'playerOne')}>Reset</button>
            </PlayerPreview> :
            <PlayerInput id='playerTwo' label='Player Two' onSubmit={this.handleSubmit} />}
        </div>
        {playerOneImg && playerTwoImg && <Link className='btn' to={{
          pathname: match.url + '/results',
          search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
        }}>Battle</Link>}
      </div>
    )
  }
}
