import React from 'react';
import PropTypes from 'prop-types';

export function RepoGrid(props) {
	return(
		<ul className='popular-list'>
			{
				props.repos.map((repo, idx) => {
					return (
						<li key={repo.name} className='popular-item'>
							<div className='popular-rank'>#{idx + 1}</div>
							<ul className='space-list-item'>
								<li>
									<img
										className='avatar'
										src={repo.owner.avatar_url}
										alt={'Avater for' + repo.owner.login}
									/>
								</li>
								<li><a href={repo.html_url}>{repo.name}</a></li>
								<li>@{repo.owner.login}</li>
								<li>{repo.stargazers_count} stars</li>
							</ul>
						</li>
					)
				})
			}
		</ul>
	)
}

RepoGrid.propTypes = {
	repos: PropTypes.array.isRequired
}
