import React from 'react';
import GameModel from './models/GameModel';
import Utils from './lib/Utils';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import Theme from './lib/Theme';
import Colors from 'material-ui/lib/styles/colors';
import AppBarComponent from './components/AppBarComponent';
// import InfoComponent from './components/InfoComponent';
import RaisedButton from 'material-ui/lib/raised-button';
import PlayerOneComponent from './components/PlayerOneComponent';
import PlayerTwoComponent from './components/PlayerTwoComponent';
import CanvasComponent from './components/CanvasComponent';

const infoStyle = {
  fontFamily: "Helvetica",
  fontSize: "20px",
  width: "700px",
  margin: "auto",
  textAlign: "center",
  padding: "15px",
};

const iconStyle = {
  fontFamily: "Material Icons",
  fontSize: "24px",
  color: Colors.purple500,
  verticalAlign: "bottom"
}

const iconStyle2 = {
  fontFamily: "Material Icons",
  fontSize: "24px",
  color: Colors.greenA200,
  verticalAlign: "bottom"
}

const iconStyle3 = {
  fontFamily: "Material Icons",
  fontSize: "36px",
  color: Colors.purple500,
  verticalAlign: "middle",
  letterSpacing: "-5px"
}

const iconStyle4 = {
  fontFamily: "Material Icons",
  fontSize: "36px",
  color: Colors.greenA200,
  verticalAlign: "top"
}

const buttonStyle = {
 margin: 12,
 verticalAlign: "middle"
};

class App extends React.Component {

  constructor() {
    super();

    this.utils = new Utils();

    let playerStorage = this.utils.store("curvefever.player");
    if (playerStorage.length === 0) {
      playerStorage = null;
    }

    this.state = {
      playerOne: playerStorage,
      playerTwo: playerStorage
    };
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(Theme),
    };
  }

  setPlayerOne(player) {
    this.setState({
      playerOne: player
    });
    this.utils.store("curvefever.player", player);
  }

  setPlayerTwo(player) {
    this.setState({
      playerTwo: player
    });
    this.utils.store("curvefever.player", player);
  }

  playerOne() {
    if (this.state.playerOne !== null) {
      let playerOne = this.state.playerOne
      return playerOne;
    } else {
      return "XXX";
    }
  }

  playerTwo() {
    if (this.state.playerTwo !== null) {
      let playerTwo = this.state.playerTwo
      return playerTwo;
    } else {
      return "XXX";
    }
  }

  clearPlayerOne() {
    this.setState({
      playerOne: null
    });
  }

  clearPlayerTwo() {
    this.setState({
      playerTwo: null
    });
  }

  render() {
    let player1 = this.playerOne();
    let player2 = this.playerTwo();
    console.log(this.state);
    console.log(player1);
    console.log(player2);

    return (
      <div>
        <AppBarComponent />
        <div>
          <p style={infoStyle}>
            <i style={iconStyle} className="material-icons">account_box</i> Player One: {player1} | <i style={iconStyle2} className="material-icons">account_circle</i> Player Two: {player2}
          </p>
        </div>

        { this.state.playerOne === null &&
          <PlayerOneComponent onCreate={this.setPlayerOne.bind(this)} /> }

        { this.state.playerOne !== null &&
          <div>
            <div style={infoStyle}>Yo, {this.state.playerOne}! Your keys are: <i style={iconStyle3} className="material-icons">keyboard_arrow_down keyboard_arrow_left keyboard_arrow_right keyboard_arrow_up</i>.
            <RaisedButton onClick={this.clearPlayerOne.bind(this)} label="Log Out" secondary={true} style={buttonStyle}/> </div>
          </div>}

        { this.state.playerTwo === null &&
          <PlayerTwoComponent onCreate={this.setPlayerTwo.bind(this)} /> }

        { this.state.playerTwo !== null &&
          <div>
            <div style={infoStyle}>Yo, {this.state.playerTwo}! Your keys are: <i style={iconStyle4} className="material-icons">S A D W</i>.
            <RaisedButton onClick={this.clearPlayerTwo.bind(this)} label="Log Out" primary={true} style={buttonStyle}/> </div>
          </div>}
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default App;
