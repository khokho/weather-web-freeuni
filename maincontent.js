'use strict';

console.log('bro');

function TempButtons() {
	return React.createElement(
		'div',
		{ 'class': 'temp-unit-buttons' },
		React.createElement(
			'div',
			{ 'class': 'temp-unit-button active' },
			React.createElement(
				'p',
				null,
				'C'
			)
		),
		React.createElement(
			'div',
			{ 'class': 'temp-unit-button' },
			React.createElement(
				'p',
				null,
				'F'
			)
		)
	);
}

function MainInfoContainer() {
	var default_props = {
		header: 'Tomorrow',
		image_name: 'c',
		temp1: '16',
		temp2: '11'
	};

	return React.createElement(
		'div',
		{ id: 'main-info' },
		TempButtons(),
		WeekWeather(),
		React.createElement(
			'h3',
			null,
			'Today\'s Hightlights'
		),
		InfoTilesContainter(),
		React.createElement(
			'div',
			{ 'class': 'footer' },
			React.createElement(
				'p',
				null,
				'made my khokho'
			)
		)
	);
}

ReactDOM.render(MainInfoContainer(), document.getElementById('content'));