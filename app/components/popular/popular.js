import React from 'react';
import { Languages } from './languages.js';

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
		return (
			<div>
				<Languages 
					selectedLanguage={this.state.selectedLanguage}
					onSelect={this.updateLanguage}
				/>
			</div>
		)
	}
}
