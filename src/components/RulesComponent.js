import React from 'react';
import Colors from 'material-ui/lib/styles/colors';

const headerStyle = {
  fontFamily: "Helvetica",
  fontSize: "24px",
  width: "700px",
  margin: "auto",
  textAlign: "center",
  background: Colors.greenA200,
  padding: "5px",
  paddingRight: "15px",
  paddingLeft: "15px",
  color: "#FFFFFF"
};

const ruleStyle = {
  fontFamily: "Helvetica",
  fontSize: "20px",
  width: "700px",
  margin: "auto",
  textAlign: "center",
  padding: "12px",
  border: "3px dashed #9C27B0"
};

class RulesComponent extends React.Component {

  render(){
    return(
      <div>
        <p></p>
        <p style={headerStyle}>How to play:</p>
        <p style={ruleStyle}>Control your snake with the above mentioned controls. If you hit border or body of either of the snakes, you die (and lose).</p>
      </div>
    )
  }
}

export default RulesComponent;
