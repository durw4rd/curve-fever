import React from 'react';

const infoStyle = {
  display: "inline",
  width: "500px",
  margin: "auto"
};

class InfoComponent extends React.Component {
  render(){
    return (
      <div style={infoStyle}>
        <h1>Curve Fever</h1>
        Player One: XXX
        |
        Player Two: XXX
      </div>
    );
  }
}


export default InfoComponent;
