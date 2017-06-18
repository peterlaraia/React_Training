import React from 'react';
import { Link } from 'react-router-dom';

export class Home extends React.Component {
	render() {
		return(
					<div className='home-container'>
						<h1>Github Battle</h1>
						<Link className='btn' to='/battle'>Battle</Link>
					</div>
				)
	}
}
