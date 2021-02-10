import React from 'react';
import style from './style.scss'

export const TemperatureUnits = Object.freeze({
  Celsius: '℃',
  Farenheit: '℉',
})

function TempButton(props) {
	return <div 
		className={`${style.temp_unit_button} ${(props.active) ? style.active : ""}`}
		onClick={()=>props.onUnitChange(props.unit)}
		>
		<p>{props.unit}</p>
	</div>
} 

function TempButtons(props) {
	return (
		<div className={style.temp_unit_buttons}>
			<TempButton 
				active={props.unit === TemperatureUnits.Celsius}
				unit={TemperatureUnits.Celsius} 
				onUnitChange={props.onUnitChange}>
			</TempButton>
			<TempButton 
				active={props.unit === TemperatureUnits.Farenheit}
				unit={TemperatureUnits.Farenheit} 
				onUnitChange={props.onUnitChange}>
			</TempButton>
		</div>
	);
}

export default TempButtons;