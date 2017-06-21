import axios from 'axios';

import { environment } from '../env/dev';

const defaultParams = {
  client_id: environment.GIT_CLIENT_ID,
  client_secret: environment.GIT_CLIENT_SECRET
};

const getProfile = (username) => {
	return axios.get('https://api.github.com/users/' + username, {
    params: defaultParams
  }).then((res) => {
		return res.data;
	});
};

const getRepos = (username) => {
	return axios.get('https://api.github.com/users/' + username + '/repos', {
    params: {
      ...defaultParams,
      per_page: 100
    }
  }).then((res) => {
		return res.data;
	});
};

const getStarCount = (repos) => {
	return repos.reduce((count, repo) => {
		return count + repo.stargazers_count;
	}, 0);
};

const calculateScore = (profile, repos) => {
	const followers = profile.followers;
	const stars = getStarCount(repos);

	return (followers * 3) + stars;
};

const sortPlayers = (players) => {
	return players.sort((a, b) => {
		return b.score - a.score;
	});
};

const getUserData = (player) => {
	return axios.all([
		getProfile(player),
		getRepos(player)
	]).then((data) => {
		let profile, repos;
		[profile, repos] = data;
		return {
			profile: profile,
			score: calculateScore(profile, repos)
		}
	})
};

const battle = (players) => {
	return axios.all(players.map(getUserData)).then(sortPlayers).catch(handleError);
};

const getPopularRepos = (lang) => {
	const encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + lang + '&sort=stars&order=desc&types=Repositories');

	return axios.get(encodedURI)
		.then((res) => {
			return res.data.items;
		});
};

const handleError = (err) => {
	console.warn(err);
	return null;
}

export const GithubApi = {
	battle: battle,
	getPopularRepos: getPopularRepos
}
