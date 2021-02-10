import React from 'react';
import ProgressBar from 'Components/ProgressBar';
import style from './style.scss'

function WindStatus(props) {
	return (
		<div className={style.windStatus}>
			<div className={style.tileHeader}>
				<p>Wind status</p>
			</div>
			<div className={style.tileMainText}>
				<p><strong>{Math.round(props.data.wind_speed*10)/10}</strong> mph</p>
			</div>
			<div className={style.tileSubContent}>
				<span>Wind Direction: {props.data.wind_direction}</span>
			</div>
		</div>
	);
}


function Humidity(props) {
	return (
		<div className={style.humidity}>
			<div className={style.tileHeader}>
				<p>Humidity</p>
			</div>
			<div className={style.tileMainText}>
				<p><strong>{props.data.humidity}</strong>%</p>
			</div>
			<div className={style.tileSubContent}>
				<ProgressBar value={props.data.humidity}/>
			</div>
		</div>
	);
}

function GenericInfo(props) {
	return (
		<div className={style.genericInfo}>
			<div className={style.tileHeader}>
				<p>{props.data.header}</p>
			</div>
			<div className={style.tileMainText}>
				<p><strong>{props.data.info}</strong> {props.data.unit}</p>
			</div>
		</div>
	);
}

export {WindStatus, Humidity, GenericInfo};