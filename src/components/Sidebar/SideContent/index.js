import React from 'react';
import { TemperatureUnits } from '../../ContentContainer/TempButtons';
import style from './style.scss'

// {
//   "id": 6338008983797760,
//   "weather_state_name": "Heavy Cloud",
//   "weather_state_abbr": "hc",
//   "wind_direction_compass": "NE",
//   "created": "2021-02-10T06:20:01.876197Z",
//   "applicable_date": "2021-02-10",
//   "min_temp": -2.035,
//   "max_temp": 1.19,
//   "the_temp": 1.555,
//   "wind_speed": 7.027421490142899,
//   "wind_direction": 42.66724627191899,
//   "air_pressure": 1016.5,
//   "humidity": 75,
//   "visibility": 11.05419350990217,
//   "predictability": 71
// }

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
			return `${toCelcius(temperature)}`;
		case TemperatureUnits.Farenheit:
			return `${toFarenheit(temperature)}`;
	}
}

const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const months = ['January','February','March','April','May','June','July','August']

function formatDate(applicable_date) {
	let date = new Date(Date.parse(applicable_date))
	let weekDay = weekdays[date.getDay()].slice(0, 3)
	let monthDay = date.getDate()
	let month = months[date.getMonth()].slice(0, 3)
	return `${weekDay}, ${monthDay} ${month}`
}

function SideContent(props) {
	console.log(props.data)
	let weather = props.data.consolidated_weather[0]
	return (
		<div className={style.sidecontent}>
			<div>
				<img src={`https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`}/>
			</div>
			<div className={style.temp}>
				<h2><strong>{getTemp(weather.max_temp, props.unit)}</strong> {props.unit}</h2>
			</div>
			<div className={style.weatherDesc}>
				<p>{weather.weather_state_name}</p>
			</div>
			<div className={style.extra}>
				<p>Today · {formatDate(weather.applicable_date)}</p>
				<p><span className="material-icons">location_on</span>{props.data.title}</p>
			</div>
		</div>
	);
}

export default SideContent; 