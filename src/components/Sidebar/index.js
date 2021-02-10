import React from 'react';
import style from './style.scss'
import Nav from './Nav'
import SideContent from './SideContent'
import Search from './Search'

class Sidebar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			searching: false,
		}
		this.startSearching = this.startSearching.bind(this)
		this.endSearching = this.endSearching.bind(this)
		this.choseCity = this.choseCity.bind(this)
	}

	startSearching() {
		this.setState({searching: true})		
	}

	endSearching() {
		this.setState({searching: false})
	}

	choseCity(woeid) {
		console.log(woeid)
		this.props.choseCity(woeid)
		this.endSearching()
	}

	render() {
		return <div className={style.sidebar}> 
				{this.state.searching ? (
					<Search 
						onCancel={this.endSearching} 
						onCityChoice={this.choseCity} 
					/>
					) : (
					<> 		 			
						<Nav 
							onSearch={this.startSearching} 
						/>
						<SideContent 
							data={this.props.data} 
							unit={this.props.unit}
						/>
					</>
					)}
				</div>
	}
}

export default Sidebar; 