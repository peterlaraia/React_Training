import React from 'react';
import PropTypes from 'prop-types';

import { PlayerPreview } from './player-preview';

function Profile(props) {
  let info = props.info;
  return (
    <PlayerPreview avatar={info.avatar_url} username={info.login}>
      <ul className='space-list-items'>
        {info.name && <li>{info.name}</li>}
        {info.location && <li>{info.location}</li>}
        {info.company && <li>{info.company}</li>}
        <li>Followers: {info.followers}</li>
        <li>Following: {info.following}</li>
        <li>Public Repos: {info.public_repos}</li>
      </ul>
    </PlayerPreview>
  )
}

export function PlayerResult(props) {
  return (
    <div>
      <h1 className='header'>{props.label}</h1>
      <h3 style={{ textAlign: 'center' }}>Score: {props.score} </h3>
      <Profile info={props.profile} />
    </div>
  );
}

PlayerResult.propTypes = {
  label: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profile: PropTypes.object.isRequired
}