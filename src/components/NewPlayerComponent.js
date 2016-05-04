import React from 'react';

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
      <div>
        <form onSubmit={this.createPlayer.bind(this)}>
          <div>
            <label>Player Name:</label>
            <input type="text" ref="playerName" placeholder="What's your name?"/>
          </div>
          <div>
            <input type="submit" value="Save"/>
          </div>
        </form>
      </div>
    );
  }
}
export default NewPlayerComponent;
