import React from 'react';
import GameModel from './models/GameModel';
import Utils from './lib/Utils';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import Theme from './lib/Theme';
import AppBarComponent from './components/AppBarComponent';
import InfoComponent from './components/InfoComponent';
import NewPlayerComponent from './components/NewPlayerComponent';
import CanvasComponent from './components/CanvasComponent';

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

  render() {
    return (
      <div>
        <AppBarComponent />
        <InfoComponent />
        <NewPlayerComponent onCreate={this.setPlayer.bind(this)} />
        <CanvasComponent />
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default App;
