import React from 'react';

const canvasStyle = {
  border: "2px solid #BDBDBD",
  background: "#FAFAFA",
  margin: "auto",
  display: "block",
  boxShadow: "2px 2px 15px #757575"
}


class CanvasComponent extends React.Component {
  render(){
    return (
      <div>
        <canvas style={canvasStyle} width="500px" height="500px" />
      </div>
    );
  }
}

export default CanvasComponent;
