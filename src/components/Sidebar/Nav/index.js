import React from 'react';
import style from './style.scss'

import GithubImg from './GitHub-Mark-Light-64px.png';

function Nav(props) {
	
	return (
		<nav className={style.sidenav}>
			<div className={style.homebutton}>
				<a href="https://github.com/khokho/weather-web-freeuni">
				<img src={GithubImg}/>
				</a>
			</div>
			<div className={style.searchbar}>
				<input onClick={props.onSearch} type="text" name="city" placeholder="Search city ..."></input>
			</div>
		</nav>
	);
}

export default Nav; 