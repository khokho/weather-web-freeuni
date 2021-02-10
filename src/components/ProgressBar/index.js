import React from 'react';
import style from './style.scss'

function ProgressBar(props) {
	const divStyle = {
		gridTemplateColumns: `${props.value}% auto`,
	};
	return (
		<div className={style.container}>
			<div className={style.numbers}>
				<p>0</p>
				<p>50</p>
				<p>100</p>
			</div>

			<div className={style.pb} style={divStyle}>
				<div className={style.yellow}></div>
				<div className={style.white}></div>
			</div>

			<div className={style.sign}>
				<p>%</p>
			</div>
		</div>
	);
}


export default ProgressBar; 