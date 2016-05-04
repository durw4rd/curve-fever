import React from 'react';
import GameModel from './models/GameModel';
import Utils from './lib/Utils';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import Theme from './lib/Theme';
import AppBarComponent from './components/AppBarComponent';
import InfoComponent from './components/InfoComponent';

class App extends React.Component {

  getChildContext() {
      return {
        muiTheme: ThemeManager.getMuiTheme(Theme),
      };
    }

  render() {
    return (
      <div>
        <AppBarComponent />
        <InfoComponent />
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default App;
