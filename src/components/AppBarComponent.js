import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import FlatButton from 'material-ui/lib/flat-button';
import RulesComponent from './RulesComponent';

const iconStyle = {
  fontFamily: "Material Icons",
  fontSize: "24px",
  color: "#FFFFFF",
  verticalAlign: "top"
}

class AppBarComponent extends React.Component {

  handleTouchTap() {
    alert('Curve fever!')
  }

  render() {
    let popUp = this.handleTouchTap;
    return(
      <AppBar
        title="Curve Fever"
        titleStyle={{ textAlign: "center" }}
        iconElementLeft={<i style={iconStyle} className="material-icons">copyright</i>}
        iconElementRight={<FlatButton label="Fake Button" />}
      />
    );
  }
}



export default AppBarComponent;
