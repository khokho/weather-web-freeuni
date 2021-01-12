'use strict';

function WeatherTile(props) {
	return React.createElement(
		"div",
		{ className: "tile weather-tile" },
		React.createElement(
			"div",
			{ className: "tile-header" },
			React.createElement(
				"p",
				null,
				props.header
			)
		),
		React.createElement(
			"div",
			null,
			React.createElement("img", { src: "https://www.metaweather.com/static/img/weather/" + props.image_name + ".svg" })
		),
		React.createElement(
			"div",
			{ className: "tile-subcontent" },
			React.createElement(
				"p",
				null,
				props.temp1,
				" C"
			),
			React.createElement(
				"p",
				null,
				props.temp2,
				" C"
			)
		)
	);
}

function WeekWeather() {
	var default_props = {
		header: 'Tomorrow',
		image_name: 's',
		temp1: '16',
		temp2: '11'
	};

	return React.createElement(
		"div",
		{ className: "upcoming-weathers" },
		WeatherTile(default_props),
		WeatherTile(default_props),
		WeatherTile(default_props),
		WeatherTile(default_props),
		WeatherTile(default_props)
	);
}