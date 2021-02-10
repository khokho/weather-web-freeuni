import React from 'react';
import style from './style.scss';

function Input(props) {
	return (
		<div className={style.inputrow}>
			<div className={style.inputContainer}>
				<div className={style.icon}>
					<span className="material-icons">
						{props.icon}
					</span>
				</div>
				<div>
					<input 
						className={style.input}
						onChange={props.onChange} 
						type="text" 
						name={props.name}
						value={props.value}
						placeholder={props.placeholder}
					/>
				</div>
			</div>
		</div> 
	);
}


export default Input; 