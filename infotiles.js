'use strict';

function WindStatusTile(props) {
	return React.createElement(
		"div",
		{ className: "tile windstatus-tile" },
		React.createElement(
			"div",
			{ className: "tile-header" },
			React.createElement(
				"p",
				null,
				"Wind status"
			)
		),
		React.createElement(
			"div",
			{ className: "tile-maintext" },
			React.createElement(
				"p",
				null,
				props.wind_speed,
				" mph"
			)
		),
		React.createElement(
			"div",
			{ className: "tile-subcontent" },
			React.createElement(
				"span",
				null,
				props.wind_direction
			)
		)
	);
}

function HumidityTile(props) {
	return React.createElement(
		"div",
		{ className: "tile humidity-tile" },
		React.createElement(
			"div",
			{ className: "tile-header" },
			React.createElement(
				"p",
				null,
				"Humidity"
			)
		),
		React.createElement(
			"div",
			{ className: "tile-maintext" },
			React.createElement(
				"p",
				null,
				props.humidity,
				"%"
			)
		),
		React.createElement(
			"div",
			{ className: "tile-subcontent" },
			React.createElement(
				"span",
				null,
				"---------------"
			)
		)
	);
}

function GenericInfoTile(props) {
	return React.createElement(
		"div",
		{ className: "tile info-tile" },
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
			{ className: "tile-maintext" },
			React.createElement(
				"p",
				null,
				props.text
			)
		)
	);
}

function InfoTilesContainter() {
	var default_wind = {
		wind_speed: 7,
		wind_direction: 'WSW'
	};
	var default_humidity = {
		humidity: 84
	};
	var default_visibility = {
		header: 'Visibility',
		text: '6.4 miles'
	};

	return React.createElement(
		"div",
		{ className: "info-tiles-container" },
		WindStatusTile(default_wind),
		HumidityTile(default_humidity),
		GenericInfoTile(default_visibility),
		GenericInfoTile(default_visibility)
	);
}