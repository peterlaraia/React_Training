import React from 'react';
import PropTypes from 'prop-types';

export function Languages(props) {
	const languages = [
		'All', 'Javascript', 'Typescript', 'Java', 'Python'
	];

	return (
		<ul className='languages'>
			{
				languages.map(lang => 
					<li 
						style={lang === props.selectedLanguage ? { color: '#d0021b' } : null}
						onClick={props.onSelect.bind(null, lang)}
						key={lang}>
						{lang}
					</li>)
			}
		</ul>
	)
}

Languages.propTypes = {
	selectedLanguage: PropTypes.string.isRequired,
	onSelect: PropTypes.func.isRequired
}
