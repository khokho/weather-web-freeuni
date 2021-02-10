import React from 'react';
import { TemperatureUnits } from '../../TempButtons';
import style from './style.scss'

function roundToTenth(temp) {
	return Math.round(temp*10)/10
}

function toCelcius(temp) {
	return roundToTenth(temp)
}

function toFarenheit(temp) {
	return roundToTenth(temp * 9/5 + 32)
}

function getTemp(temperature, unit) {
	switch(unit) {
		case TemperatureUnits.Celsius:
			return `${toCelcius(temperature)} ${unit}`;
		case TemperatureUnits.Farenheit:
			return `${toFarenheit(temperature)} ${unit}`;
	}
}

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const months = ['January','February','March','April','May','June','July','August']

function formatDate(dt_txt) {
	let date = new Date(Date.parse(dt_txt))
	let weekDay = weekdays[date.getDay()].slice(0, 3)
	let monthDay = date.getDate()
	let month = months[date.getMonth()].slice(0, 3)
	return `${weekDay}, ${monthDay} ${month}`
}

function Tile(props) {
	let data = props.data
	return (
		<div className={style.tile}>
			<div className={style.tileHeader}>
				<p>{formatDate(data.applicable_date)}</p>
			</div>
			<div>
				<img src={`https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`}/>
			</div>
			<div className={style.tileSubcontent}>
				<p>{getTemp(data.max_temp, props.unit)}</p>
				<p className={style.secondTemp}>{getTemp(data.min_temp, props.unit)}</p>
			</div>
		</div>
	);
}

export default Tile;