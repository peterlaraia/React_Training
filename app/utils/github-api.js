import axios from 'axios';

const getPopularRepos = (lang) => {
	const encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + lang + '&sort=stars&order=desc&types=Repositories');

	return axios.get(encodedURI)
		.then((res) => {
			console.log(res);
			return res.data.items;
		});
}

export const GithubApi = {
	getPopularRepos: getPopularRepos
}
