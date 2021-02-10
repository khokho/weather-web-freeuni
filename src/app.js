import React from 'react';
import Sidebar from 'Components/Sidebar'
import ContentContainer from 'Components/ContentContainer';
import FloatingButton from 'Components/FloatingButton';
import SubscribePopup from 'Components/SubscribePopup';
import './styles/main.scss'
import styles from './app.scss'
import { TemperatureUnits } from 'Components/ContentContainer/TempButtons';

class App extends React.Component {

	constructor(props) {
		super(props)
    	this.state = {
    		temperatureUnit: TemperatureUnits.Celsius,
    		data: null,
    		popup: false,
    	};
    	this.temperatureUnitChanged = this.temperatureUnitChanged.bind(this)
    	this.choseCity = this.choseCity.bind(this)
    	this.showPopup = this.showPopup.bind(this)
    	this.hidePopup = this.hidePopup.bind(this)
    }


	fetchData(woeid){
		const path = 'https://khokhoproxy.herokuapp.com/https://www.metaweather.com/api/location/'
		fetch(`${path}${woeid}/`)
			.then(response => response.json())
			.then(json => {
				console.log(json)
				this.setState({data: json})
			})
	}

	componentDidMount(){
		if(location.hash==""){
			location.hash="#44418"
			this.fetchData(44418)	
		} else {
			this.fetchData(location.hash.slice(1))	
		}
	}

	choseCity(woeid) {
		location.hash=`#${woeid}`
		this.fetchData(woeid)
	}

    temperatureUnitChanged(unit) {
    	this.setState({temperatureUnit: unit});
    }

    showPopup() {
    	this.setState({popup: true})
    }

    hidePopup() {
    	this.setState({popup: false})
    }

	render() {
		if(!this.state.data) return null;
		return (
			<div className={styles.app}>
				<Sidebar 
					data={this.state.data} 
					unit={this.state.temperatureUnit}
					choseCity={this.choseCity}
					/>
				<ContentContainer 
					data={this.state.data.consolidated_weather}
					unit={this.state.temperatureUnit} 
					onUnitChange={this.temperatureUnitChanged}>
				</ContentContainer>
				<FloatingButton icon="quickreply" onClick={this.showPopup}/>
				{this.state.popup &&
					<SubscribePopup city={this.state.data.title} onClose={this.hidePopup}/>}
			</div>
		);	
	}
}

export default App; 