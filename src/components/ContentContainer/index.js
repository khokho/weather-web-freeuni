import React from 'react';
import TempButtons from './TempButtons';
import Forecast from './Forecast';
import InfoTiles from './InfoTiles';
import style from './style.scss'

class ContentContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let forecast = this.props.data.slice(1);
		let todayInfo = this.props.data[0];
		return (
			<div className={style.container}>
				<div className={style.main}>
					<TempButtons 
						unit={this.props.unit} 
						onUnitChange={this.props.onUnitChange}>
					</TempButtons>
					<Forecast forecast={forecast} unit={this.props.unit}/>
					<h3>Today's Hightlights</h3>
					<InfoTiles data={todayInfo}></InfoTiles>
					<div className={style.footer}><p>made my khokho</p></div>
				</div>
			</div>
		);
	}
}

export default ContentContainer; 