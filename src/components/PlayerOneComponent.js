import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

const buttonStyle = {
 margin: 5,
 marginLeft: 15,
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
  padding: "5px"
}

class PlayerOneComponent extends React.Component {

  createPlayer1(event) {
      event.preventDefault();
      console.log("Create Player1 Called!");
      let newPlayer1 = this.refs.player1Name.value;
      this.props.onCreate(newPlayer1);
      this.refs.player1Name.value = "";
    }

  render() {
    return(
      <form style={formStyle}>
        <div style={pad}>
          <input style={p2Style} type="text" ref="player1Name" placeholder="Enter Player 1"/>
          <RaisedButton onClick={this.createPlayer1.bind(this)} label="Save" secondary={true} style={buttonStyle} />
        </div>
      </form>
    );
  }
}
export default PlayerOneComponent;
