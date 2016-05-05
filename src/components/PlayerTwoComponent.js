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

class PlayerTwoComponent extends React.Component {

  createPlayer2(event) {
      event.preventDefault();
      console.log("Create Player2 Called!");
      let newPlayer2 = this.refs.player2Name.value;
      this.props.onCreate(newPlayer2);
      this.refs.player2Name.value = "";
    }

  render() {
    return(
      <form style={formStyle}>
        <div style={pad}>
          <input style={p2Style} type="text" ref="player2Name" placeholder="Enter Player 2"/>
          <RaisedButton onClick={this.createPlayer2.bind(this)} label="Save" primary={true} style={buttonStyle} />
        </div>
      </form>
    );
  }
}
export default PlayerTwoComponent;
