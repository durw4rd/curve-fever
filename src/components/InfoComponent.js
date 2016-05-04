import React from 'react';
import Colors from 'material-ui/lib/styles/colors';
import NewPlayerComponent from './NewPlayerComponent';

const infoStyle = {
  fontFamily: "Helvetica",
  fontSize: "20px",
  width: "500px",
  margin: "auto",
  textAlign: "center",
  padding: "15px"
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

class InfoComponent extends React.Component {

  render(){
    let component = this;
    return (
      <div>
        <p style={infoStyle}>
          <i style={iconStyle} className="material-icons">account_box</i> Player One: XXX | <i style={iconStyle2} className="material-icons">account_circle</i> Player Two: XXX
        </p>
      </div>
    );
  }
}


export default InfoComponent;
