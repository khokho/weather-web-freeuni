'use strict';

function WindStatusTile(props) {
	return (
		<div className="tile windstatus-tile">
			<div className="tile-header">
				<p>Wind status</p>
			</div>
			<div className="tile-maintext">
				<p>{props.wind_speed} mph</p>
			</div>
			<div className="tile-subcontent">
				<span>{props.wind_direction}</span>
			</div>
		</div>
	);
}

function HumidityTile(props) {
	return (
		<div className="tile humidity-tile">
			<div className="tile-header">
				<p>Humidity</p>
			</div>
			<div className="tile-maintext">
				<p>{props.humidity}%</p>
			</div>
			<div className="tile-subcontent">
				<span>---------------</span>
			</div>
		</div>
	);
}

function GenericInfoTile(props) {
	return (
		<div className="tile info-tile">
			<div className="tile-header">
				<p>{props.header}</p>
			</div>
			<div className="tile-maintext">
				<p>{props.text}</p>
			</div>
		</div>
	);
}



function InfoTilesContainter() {
	var default_wind = {
		wind_speed: 7,
		wind_direction: 'WSW'
	};
	var default_humidity = {
		humidity: 84,
	};
	var default_visibility = {
		header: 'Visibility',
		text: '6.4 miles',
	};

	return (
		<div className="info-tiles-container">
			{WindStatusTile(default_wind)}
			{HumidityTile(default_humidity)}
			{GenericInfoTile(default_visibility)}
			{GenericInfoTile(default_visibility)}
		</div>
	);
}