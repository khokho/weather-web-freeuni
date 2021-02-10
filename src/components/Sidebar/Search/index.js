import React from 'react';
import style from './style.scss'


function Input(props) {
	return (
		<div className={style.inputrow}>
			<div className={style.inputContainer}>
				<div className={style.icon}>
					<span className="material-icons">
						search
					</span>
				</div>
				<input 
					className={style.input}
					onChange={props.onChange} 
					type="text" 
					name="city"
					value={props.value}
					placeholder="Search city ..."
				/>
			</div>
			<button className={style.btn} onClick={props.onSubmit}>
				Search
			</button>
		</div> 
	);
}

function SearchItem(props) {
	return (
		<div className={style.searchItem} onClick={props.onClick}>
			<div>
				<h2>{props.city}</h2>
				<span className="material-icons">
					chevron_right
				</span>
			</div>
		</div>
	);
}

class Search extends React.Component {

	constructor(props) {
		super(props)	
	    this.state = {
	    	value: '',
	    	cities: [],
	    };

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	fetchData(){
		const path = 'https://khokhoproxy.herokuapp.com/https://www.metaweather.com/api/location/search/'
		console.log('---->', this.state.value)
		fetch(`${path}?query=${this.state.value}`)
			.then(response => response.json())
			.then(json => {
				console.log(json)
				this.setState({cities: json})
			})
	}

	handleChange(event) {
	    this.setState({value: event.target.value});
	    this.fetchData() 
	    console.log(this.state.value) 
	}

	handleSubmit(event) {
		// alert('A name was submitted: ' + this.state.value);
		// event.preventDefault();
		console.log(event)
	}


	componentDidMount(){
		var input = document.querySelector(`.${style.input}`);
		input.focus();
		input.select();
	}

	render() {
		console.log('renderiiing')
		return (
			<div className={style.container}>
				<div className={style.closerow}>
			 		<span onClick={this.props.onCancel} className="material-icons">
						close
					</span>
				</div>
				<Input 
					onChange={this.handleChange}
					onSubmit={this.handleSubmit}
					value={this.value}
				/>
				{this.state.cities.map(city => (
					<SearchItem 
						key={city.woeid} 
						city={city.title}
						onClick={()=>{this.props.onCityChoice(city.woeid)}}
						/>
				))}
			</div>
		);
	}
}

export default Search; 