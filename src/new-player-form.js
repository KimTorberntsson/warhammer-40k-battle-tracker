import React from 'react';

export default class NewPlayerForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			faction: 'Imperium',
			playerName: '',
			commandPoints: 4,
			cancelClicked: false
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	onSubmit(event) {
		event.preventDefault();
		this.props.onSubmit(this.state);
	}

	render() {
		if(!this.props.show) {
			return null;
		}

		return (
			<div className="backDrop">
			<div className="modal">
				<form className="newPlayerForm" onSubmit={this.onSubmit}>
					<h2>Add New Player</h2>
					<div className="leftColumn">
						Faction:<br />
						Player Name:<br />
						Command Points:
					</div>
					<div className="rightColumn">
						<Select
							options={this.props.factions}
							name="faction"
							value={this.state.faction}
							onChange={this.handleInputChange} />
						<br />
						<input 
							type="text" 
							name="playerName" 
							value={this.state.playerName}
							onChange={this.handleInputChange} />
						<br />
						<input 
							type="number" 
							name="commandPoints"
							value={this.state.commandPoints} 
							onChange={this.handleInputChange} />
					</div>
					<br />
					<button
						type="button"
						className="cancelButton"
						onClick={this.props.onCancel}>
						Cancel
					</button>
					<input 
						className="submitButton"
						type="submit" 
						value="Submit" />
				</form>
			</div>
			</div>
		);
	}
}

class Select extends React.Component {
	render() {
		const options = this.props.options.map((option) => {
			return (
				<option value={option} key={option}>{option}</option>
			)
		});
		return (
			<select
				name={this.props.name}
				value={this.props.value}
				onChange={this.props.onChange}>
				{options}
			</select>
		);
	}
}



