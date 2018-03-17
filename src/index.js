import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import convertToRoman from './roman-numeral-convertion.js'

function playerInformationStruct(playerName, armyName, symbol) {
	this.armyName = armyName;
	this.playerName = playerName;
	this.symbol = symbol;
	this.commandPoints = 4;
	this.victoryPoints = 0;
}

function createPlayerInformation() {
	return [
		new playerInformationStruct('Ultramarines', 'Kim', './assetts/symbols/ultramarines.svg'),
		new playerInformationStruct('Death Guard', 'David', './assetts/symbols/death-guard.svg'),
		new playerInformationStruct('Tau Empire', 'Martin', './assetts/symbols/tau.png'),
	];
}

function RoundTracker(props) {
	return (
		<div className="roundTracker">
			<p>Round: {convertToRoman(props.gameRound)}
				<button className="upButton" onClick={props.roundUpButtonClicked}>&uarr;</button>
				<button className="downButton" onClick={props.roundDownButtonClicked}>&darr;</button>
			</p>
		</div>
	);
}

function PlayerInformation(props) {
	return (
		<div className="playerInformation" style={props.width}>
			<h1>{props.armyName}</h1>
			<h2>{props.playerName}</h2>
			<div>
				<div className="pointsDiv">
					<p>Command Points: {convertToRoman(props.commandPoints)} 
						<button className="upButton" onClick={props.commandPointUpButtonClicked}>&uarr;</button>
						<button className="downButton" onClick={props.commandPointDownButtonClicked}>&darr;</button>
					</p>
					<p>Victory Points: {convertToRoman(props.victoryPoints)}
						<button className="upButton" onClick={props.victoryPointUpButtonClicked}>&uarr;</button>
						<button className="downButton" onClick={props.victoryPointDownButtonClicked}>&darr;</button>
					</p>
				</div>
			</div>
			<img className="symbol" src={require(`${props.symbol}`)} alt="Army symbol" height="75"/>
		</div>
	);
}

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playerInformation: createPlayerInformation(),
			gameRound: 0
		};
	}

	render() {
		const playerInfo = this.state.playerInformation.map((step, index) => {
			return (
				this.renderPlayerInformation(index)
			)
		});
		return(
			<div className="game">
				<h1 className="header">Warhammer 40k Battle Tracker </h1>
				<RoundTracker
					gameRound={this.state.gameRound}
					roundUpButtonClicked={() => this.onRoundButtonPressed(1)}
					roundDownButtonClicked={() => this.onRoundButtonPressed(0)}
				/>
				<div className="playerInformationDiv">
					{playerInfo}
				</div>
			</div>
		);
	}

	renderPlayerInformation(index) {
		var width = {width: `${100/this.state.playerInformation.length}%`};
		return (
				<PlayerInformation
					armyName={this.state.playerInformation[index].playerName}
					playerName={this.state.playerInformation[index].armyName}
					symbol={this.state.playerInformation[index].symbol}
					commandPoints={this.state.playerInformation[index].commandPoints}
					victoryPoints={this.state.playerInformation[index].victoryPoints}
					key={this.state.playerInformation[index].playerName}
					commandPointUpButtonClicked={() => this.onPointsButtonPressed(index, 1, 1)}
					commandPointDownButtonClicked={() => this.onPointsButtonPressed(index, 1, 0)}
					victoryPointUpButtonClicked={() => this.onPointsButtonPressed(index, 0, 1)}
					victoryPointDownButtonClicked={() => this.onPointsButtonPressed(index, 0, 0)}
					width={width}
				/>
		);
	}

	onPointsButtonPressed(index, commandPoint, increase) {
		var playerInformation = this.state.playerInformation;
		if(commandPoint) {
			increase ? playerInformation[index].commandPoints += 1 : playerInformation[index].commandPoints -= 1;
		} else {
			increase ? playerInformation[index].victoryPoints += 1 : playerInformation[index].victoryPoints -= 1;
		}
		this.setState({
			playerInformation: playerInformation
		})
	}

	onRoundButtonPressed(increase) {
		this.setState({gameRound: increase ? this.state.gameRound + 1 : this.state.gameRound - 1})
	}
}

ReactDOM.render(
	<Game />,
	document.getElementById('root')
);
