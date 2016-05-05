import React from 'react';
import Colors from 'material-ui/lib/styles/colors';
import Popover from 'material-ui/lib/popover/popover';
import RaisedButton from 'material-ui/lib/raised-button';

const buttonStyle = {
 verticalAlign: "middle",
 width: "500px"
};

const centerStyle = {
  width: "500px",
  margin: "auto",
  border: "dashed 3px #9C27B0"
}

const ruleStyle = {
  fontFamily: "Helvetica",
  fontSize: "20px",
  width: "700px",
  margin: "auto",
  textAlign: "center",
  padding: "12px",
  border: "3px dashed #9C27B0"
};

const styles = {
  popover: {
    padding: 20,
  },
};

class RulesComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap(event) {
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose() {
    this.setState({
      open: false,
    });
  };

  render(){
    return(
      <div style={centerStyle}>
        <RaisedButton style={buttonStyle}
          onClick={this.handleTouchTap}
          label="How to play:"
          primary={true}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <div style={styles.popover}>
            <p style={ruleStyle}>Control your snake with the above mentioned controls. If you hit border or body of either of the snakes, you die (and lose).</p>
          </div>
        </Popover>
      </div>
    )
  }
}

export default RulesComponent;
