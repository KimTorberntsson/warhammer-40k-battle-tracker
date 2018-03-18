import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import convertToRoman from './roman-numeral-convertion.js'
import NewPlayerForm from './new-player-form.js'
import './new-player-form.css';

function playerInformationStruct(faction, playerName, symbol, commandPoints) {
	this.faction = faction;
	this.playerName = playerName;
	this.symbol = symbol;
	this.commandPoints = commandPoints;
	this.victoryPoints = 0;
}

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playerInformation: [],
			gameRound: 0,
			factions: getFactions(),
			showAddPlayerForm: false
		};
	}

	render() {
		var playerInfo;
		if (this.state.playerInformation) {
			playerInfo = this.state.playerInformation.map((step, index) => {
				return (
					this.renderPlayerInformation(index)
				)
			});
		}
		
		return(
			<div>
			<div className="game">
				<h1 className="header">
					Warhammer 40k Battle Tracker 
				</h1>
				<RoundTracker
					gameRound={this.state.gameRound}
					roundUpButtonClicked={() => this.onRoundButtonPressed(1)}
					roundDownButtonClicked={() => this.onRoundButtonPressed(0)} />
				<div className="playerInformationDiv">
					{playerInfo}
				</div>
				<button 
					className="addPlayerButton"
					onClick={() => this.onAddPlayerButtonPressed()}>
					Add New Player
				</button>
			</div>
			<NewPlayerForm 
					onSubmit={(state) => this.addPlayer(state)}
					onCancel={() => this.onCancelButtonPressed()}
					factions={this.state.factions} 
					show={this.state.showAddPlayerForm} />
			</div>
		);
	}

	renderPlayerInformation(index) {
		var width = {width: `${100/this.state.playerInformation.length}%`};
		return (
			<PlayerInformation
				faction={this.state.playerInformation[index].faction}
				playerName={this.state.playerInformation[index].playerName}
				symbol={this.state.playerInformation[index].symbol}
				commandPoints={this.state.playerInformation[index].commandPoints}
				victoryPoints={this.state.playerInformation[index].victoryPoints}
				key={this.state.playerInformation[index].playerName}
				commandPointUpButtonClicked={() => this.onPointsButtonPressed(index, 1, 1)}
				commandPointDownButtonClicked={() => this.onPointsButtonPressed(index, 1, 0)}
				victoryPointUpButtonClicked={() => this.onPointsButtonPressed(index, 0, 1)}
				victoryPointDownButtonClicked={() => this.onPointsButtonPressed(index, 0, 0)}
				width={width} />
		);
	}

	onPointsButtonPressed(index, commandPoint, increase) {
		var playerInformation = this.state.playerInformation;
		if(commandPoint) {
			if (increase) {
				playerInformation[index].commandPoints += 1
			} else if (playerInformation[index].commandPoints > 0) {
				// Never decrease beyond zero points
				playerInformation[index].commandPoints -= 1;
			}
		} else {
			if (increase) {
				playerInformation[index].victoryPoints += 1
			} else if (playerInformation[index].victoryPoints > 0) {
				// Never decrease beyond zero points
				playerInformation[index].victoryPoints -= 1;
			}
		}
		this.setState({playerInformation: playerInformation})
	}

	onRoundButtonPressed(increase) {
		this.setState({gameRound: increase ? this.state.gameRound + 1 : this.state.gameRound - 1})
	}

	onAddPlayerButtonPressed() {
		this.setState({showAddPlayerForm: true});
	}

	addPlayer(state) {
		this.setState({showAddPlayerForm: false});

		var playerInformation = this.state.playerInformation;
		const pathforSymbol = this.getPathForFactionSymbol(state.faction);
		const newPlayerInformation = new playerInformationStruct(state.faction, state.playerName, pathforSymbol, state.commandPoints);
		playerInformation.push(newPlayerInformation);
		this.setState({playerInformation: playerInformation})

	}

	onCancelButtonPressed() {
		this.setState({showAddPlayerForm: false});
	}

	getPathForFactionSymbol(faction) {
		return './assetts/symbols/' + faction.toLowerCase().replace(/ /g, '-') + ".svg";
	}
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
			<h1>{props.faction}</h1>
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

function getFactions() {
	return ['Adeptus Astartes', 
		'Adeptus Mechanicus',
		'Adeptus Ministorum',
		'Alpha Legion',
		'Angels of Retribution',
		'Angels of Vengance',
		'Astra Militarum',
		'Black Legion',
		'Blood Angels',
		'Chaos',
		'Crux Terminatus',
		'Dark Angels',
		'Death Guard',
		'Emperors Children',
		'Imperial Fists',
		'Imperium',
		'Inquisition',
		'Iron Hands',
		'Iron Warriors',
		'Khorne',
		'Knight Lords',
		'Nurgle',
		'Raven Guard',
		'Salamanders',
		'Sisters of Battle',
		'Slaanesh',
		'Space Wolfs',
		'Tau',
		'Thousand Sons',
		'Tyranids',
		'Tzeentch',
		'Ultramarines',
		'White Scars',
		'World Bearers',
		'World Eaters'
	];
}

ReactDOM.render(
	<Game />,
	document.getElementById('root')
);
