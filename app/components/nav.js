import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export function Nav(props) {
	return (
		<ul className='nav'>
			<li><NavLink activeClassName='active' exact to='/'>Home</NavLink></li>
			<li><NavLink activeClassName='active' to='/battle'>Battle</NavLink></li>
			<li><NavLink activeClassName='active' to='/popular'>Popular</NavLink></li>
		</ul>
	)
}
