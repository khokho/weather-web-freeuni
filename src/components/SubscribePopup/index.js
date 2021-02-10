import React from 'react';
import style from './style.scss'
import Input from './Input'

function EventPicker(props) {
	return (
		<div className={style.inputrow}>
			<select name={props.name} value={props.value} onChange={props.onChange}>
				<option value="less">Notify when less than:</option>
				<option value="more">Notify when more than:</option>
				<option value="close">Notify when close to:</option>
			</select>
		</div>
	);
}

class SubscribePopup extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			city: props.city,
			phone: "",
			event: "less",
			data: "",
		}

		this.handleInputChange = this.handleInputChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onSubmit(){
		console.log(this.state.city)
		console.log(this.state.phone)
		console.log(this.state.event)
		console.log(this.state.data)
		fetch('/api/subscribe/', {
  			method: 'post',
  			body: JSON.stringify(this.state),
		  	headers: {
				'Accept': 'application/json'
			},
			credentials: 'same-origin', // send cookies
			credentials: 'include',     // send cookies, even in CORS
		})

		this.props.onClose()
	}

	handleInputChange(event){
	    const target = event.target;
	    const value = target.value;
	    const name = target.name;
	    console.log(name, value)
	    this.setState({
	      [name]: value    
	  	});
	}

	render() {
		return (
			<div className={style.popupContainer}>
				<div className={style.popup}>
					<div className={style.closerow}>
				 		<span onClick={this.props.onClose} className="material-icons md-48">
							cancel
	 					</span>
					</div>
					<div>
						<p className={style.description}>Get SMS notifications when a temprature in you city goes below, higher or close to specified one</p>
					</div>
					<Input
						onChange={this.handleInputChange}
						value={this.state.city} 
						icon="location_city" 
						placeholder="Enter City"
						name="city"
						/>
					<Input 
						onChange={this.handleInputChange}
						value={this.state.phone} 
						icon="phone" 
						placeholder="Enter Phone"
						name="phone"
						/>
					<EventPicker
						onChange={this.handleInputChange}
						value={this.state.event}
						name="event"
						/>
					<Input 
						onChange={this.handleInputChange}
						value={this.state.data} 
						icon="thermostat" 
						placeholder="Enter Value"
						name="data"
						/>	
					<div className={style.inputrow}>
						<button onClick={this.onSubmit} className={style.btn}>submit</button>
					</div>
				</div>
			</div>
		);
	}
}


export default SubscribePopup; 