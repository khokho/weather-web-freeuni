import React from 'react';
import style from './style.scss'

function FloatingButton(props) {
	return (
		<div onClick={props.onClick} className={style.float}>
			<span className="material-icons md-24">
				{props.icon}
			</span>
		</div>
	);
}


export default FloatingButton; 