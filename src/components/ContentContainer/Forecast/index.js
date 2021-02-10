import React from 'react';
import Tile from './Tile'
import style from './style.scss'

class Forecast extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className={style.forecast}>
				{this.props.forecast.map((data, key) => (
					<Tile key={key} data={data} unit={this.props.unit}/>
				))}
			</div>
		);
	}
}

export default Forecast;