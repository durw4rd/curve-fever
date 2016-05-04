import React from 'react';
import GameModel from './models/GameModel';
import Utils from './lib/Utils';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import Theme from './lib/Theme';
import AppBarComponent from './components/AppBarComponent';
import InfoComponent from './components/InfoComponent';
import NewPlayer from './components/NewPlayer';
import NewSnake from './components/NewSnake';

class App extends React.Component {

  getChildContext() {
     return {
       muiTheme: ThemeManager.getMuiTheme(Theme),
     };
   }

  constructor() {
    super();

    this.games = new GameModel();
    this.utils = new Utils();

    let playerStorage = this.utils.store("curvefever.player");
    if (playerStorage.length === 0) {
      playerStorage = null;
    }

    this.state = {
      games: [],
      currentGame: null,
      currentPlayer: playerStorage,
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
              <AppBar title="Curve Fever"/>
              <InfoComponent />
              <NewPlayer onCreate={this.setPlayer.bind(this)} />
            </div>
        );
    }
}

export default App;
