import React from 'react';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

import { GithubApi } from '../../utils/github-api';
import { PlayerResult } from './player-result';

export class Results extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    }
  }

  componentDidMount() {
    const players = queryString.parse(this.props.location.search);

    GithubApi.battle([players.playerOneName, players.playerTwoName]).then((results) => {
      if (!results) {
        return this.setState(() => ({
          error: 'Looks like there was an error. Check that both users exist on Github',
          loading: false
        }));
      }

      this.setState(() => ({
        error: null,
        winner: results[0],
        loser: results[1],
        loading: false
      }));
    });

  }

  render() {
    const winner = this.state.winner;
    const loser = this.state.loser;
    const loading = this.state.loading;
    const error = this.state.error;

    if (loading) {
      return <p>Loading...</p>
    }

    if (error) {
      return (
        <div>
          <p>{this.state.error}</p>
          <Link to='/battle'>Reset</Link>
        </div>
      )
    }

    return (
      <div className='row'>
        <PlayerResult label='Winner' score={winner.score} profile={winner.profile} />
        <PlayerResult label='Loser' score={loser.score} profile={loser.profile} />
      </div>
    );
  }
}