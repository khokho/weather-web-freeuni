'use strict';

console.log('bro')

function TempButtons() {
	return (
		<div class="temp-unit-buttons">
			<div class="temp-unit-button active">
				<p>C</p>
			</div>
			<div class="temp-unit-button">
				<p>F</p>
			</div>
		</div>
	);
}

function MainInfoContainer() {
	var default_props = {
		header: 'Tomorrow',
		image_name: 'c',
		temp1: '16',
		temp2: '11',
	};

	return (
		<div id="main-info">
			{TempButtons()}
			{WeekWeather()}
			<h3>Today's Hightlights</h3>
			{InfoTilesContainter()}
			<div class="footer"><p>made my khokho</p></div>
		</div>
	);
}


ReactDOM.render(
  MainInfoContainer(),
  document.getElementById('content')
);