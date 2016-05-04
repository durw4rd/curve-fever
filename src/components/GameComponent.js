import React from 'react';

class GameComponent extends React.Component {
  render() {
    let component = this;
    return (
      <div>
        currentPlayer={component.props.currentPlayer}
      </div>
    )
  }
}

export default GameComponent;
