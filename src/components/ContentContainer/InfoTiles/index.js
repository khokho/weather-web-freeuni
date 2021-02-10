import React from 'react';
import {WindStatus, Humidity, GenericInfo} from './Tiles';
import style from './style.scss'

function InfoTiles(props) {
	var wind = {
		wind_speed: props.data.wind_speed,
		wind_direction: props.data.wind_direction_compass,
	};
	var humidity = {
		humidity: props.data.humidity,
	};
	var visibility = {
		header: 'Visibility',
		info: Math.round(props.data.visibility*10)/10,
		unit: 'miles',
	};
	var air_pressure = {
		header: 'Air Pressure',
		info: Math.round(props.data.air_pressure),
		unit: 'mb',
	};
	return (
		<div className={style.infoTiles}>
			<WindStatus data={wind}/>
			<Humidity data={humidity}/>
			<GenericInfo data={visibility}/>
			<GenericInfo data={air_pressure}/>
		</div>
	);
}

export default InfoTiles;