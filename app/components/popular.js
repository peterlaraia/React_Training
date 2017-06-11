import React from 'react';

export class Popular extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			selectedLanguage: 'All'
		}

		this.updateLanguage = this.updateLanguage.bind(this);
	}

	updateLanguage(lang) {
		this.setState(() => {
			return {
				selectedLanguage: lang
			}
		});
	}

	render() {
		const languages = [
			'All', 'Javascript', 'Typescript', 'Java', 'Python'
		];
		return (
			<ul className='languages'>
				{
					languages.map(lang => 
						<li 
							style={lang === this.state.selectedLanguage ? { color: '#d0021b' } : null}
							onClick={this.updateLanguage.bind(null, lang)}
							key={lang}>
							{lang}
						</li>)
				}
			</ul>
		)
	}
}
