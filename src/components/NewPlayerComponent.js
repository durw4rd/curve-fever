import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

const buttonStyle = {
 margin: 12,
 verticalAlign: "middle"
};

const formStyle = {
  width: "500px",
  margin: "auto",
  textAlign: "center"
}

const p2Style = {
  fontFamily: "Helvetica",
  fontSize: "20px",
  color: "#333",
  padding: "2px",
  verticalAlign: "middle",
  textAlign: "center",
}

const pad = {
  padding: "15px"
}

class NewPlayerComponent extends React.Component {

  createPlayer(event) {
      event.preventDefault();
      console.log("Create Player Called!");
      let newPlayer = this.refs.playerName.value;
      this.props.onCreate(newPlayer);
      this.refs.playerName.value = "";
    }

  render() {
    return(
      <form style={formStyle}>
        <div style={pad}>
          <input style={p2Style} type="text" ref="playerName" placeholder="Enter Player's Name"/>
          <RaisedButton onClick={this.createPlayer.bind(this)} label="Save" primary={true} style={buttonStyle} />
        </div>
      </form>
    );
  }
}
export default NewPlayerComponent;
