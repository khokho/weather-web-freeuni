'use strict';

function WeatherTile(props) {
  return (
	<div className="tile weather-tile">
		<div className="tile-header">
			<p>{props.header}</p>
		</div>
		<div>
			<img src={`https://www.metaweather.com/static/img/weather/${props.image_name}.svg`}/>
		</div>
		<div className="tile-subcontent">
			<p>{props.temp1} C</p>
			<p>{props.temp2} C</p>
		</div>
	</div>
  );
}

function WeekWeather() {
	var default_props = {
		header: 'Tomorrow',
		image_name: 's',
		temp1: '16',
		temp2: '11',
	};

	return (
		<div className="upcoming-weathers">
			{WeatherTile(default_props)}
			{WeatherTile(default_props)}
			{WeatherTile(default_props)}
			{WeatherTile(default_props)}
			{WeatherTile(default_props)}
		</div>
	);
}

