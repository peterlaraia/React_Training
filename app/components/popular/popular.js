import React from 'react';
import { Languages } from './languages';
import { RepoGrid } from './repo-grid'
import { Loading } from '../shared/loading';
import { GithubApi } from '../../utils/github-api';

export class Popular extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			selectedLanguage: 'All',
			repos: null
		}

		this.updateLanguage = this.updateLanguage.bind(this);
	}

	componentDidMount() {
		this.updateLanguage(this.state.selectedLanguage);
	}

	updateLanguage(lang) {
		this.setState(() => {
			return {
				selectedLanguage: lang
			}
		});

		GithubApi.getPopularRepos(lang)
			.then((repos) => {
				this.setState(() => {
					return {
						repos: repos
					};
				});
			});
	}

	render() {
		return (
			<div>
				<Languages 
					selectedLanguage={this.state.selectedLanguage}
					onSelect={this.updateLanguage}
				/>
				{
					!this.state.repos ? <Loading text='Downloading' /> : <RepoGrid repos={this.state.repos} />
				}
			</div>
		)
	}
}
