import React from 'react';
import GameModel from './models/GameModel';
import Utils from './lib/Utils';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import Theme from './lib/Theme';
import Colors from 'material-ui/lib/styles/colors';
import AppBarComponent from './components/AppBarComponent';
// import InfoComponent from './components/InfoComponent';
import RaisedButton from 'material-ui/lib/raised-button';
import NewPlayerComponent from './components/NewPlayerComponent';
import CanvasComponent from './components/CanvasComponent';

const infoStyle = {
  fontFamily: "Helvetica",
  fontSize: "20px",
  width: "500px",
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
      currentPlayer: playerStorage
    };
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(Theme),
    };
  }

  setPlayer(player) {
    this.setState({
      currentPlayer: player
    });
    this.utils.store("curvefever.player", player);
  }

  playerOne() {
    if (this.state.currentPlayer !== null) {
      let playerOne = this.state.currentPlayer
      return playerOne;
    } else {
      return "XXX";
    }
  }

  clearCurrentPlayer() {
    this.setState({
      currentPlayer: null
    });
  }

  render() {
    let player1 = this.playerOne();
    // let player2 = this.playerTwo();
    console.log(this.state);
    console.log(player1);
    // console.log(player2);

    return (
      <div>
        <AppBarComponent />
        <div>
          <p style={infoStyle}>
            <i style={iconStyle} className="material-icons">account_box</i> Player One: {player1} | <i style={iconStyle2} className="material-icons">account_circle</i> Player Two: XXX
          </p>
        </div>

        { this.state.currentPlayer === null &&
          <NewPlayerComponent onCreate={this.setPlayer.bind(this)} /> }

        { this.state.currentPlayer !== null &&
          <div>
            <div style={infoStyle}>Long time no see, {this.state.currentPlayer}! <RaisedButton onClick={this.clearCurrentPlayer.bind(this)} label="Log Out" secondary={true} style={buttonStyle}/> </div>

          </div>}

        <CanvasComponent />

      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default App;
