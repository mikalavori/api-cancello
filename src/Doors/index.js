import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './styles.css';

const bigButtonStyles = {
  button: {
    height: 100,
  },
  label: {
    height: 100,
    lineHeight: '100px',
  },
  overlay: {
    height: 100,
  }
}

const BigButton = (props) => (
  <RaisedButton
    {...props}
    fullWidth
    labelStyle={bigButtonStyles.label}
    buttonStyle={bigButtonStyles.button}
    overlayStyle={bigButtonStyles.overlay}
  />
)

class Doors extends Component {
  onButtonClick = (buttonName) => (e) => {
    console.log('button clicked!', buttonName, e);
  }

  render() {
    return (
      <div className={styles.container}>
        <BigButton label="APRI TUTTI" primary onClick={this.onButtonClick('ALL')} />
        <BigButton label="ESTERNA" secondary onClick={this.onButtonClick('OUTSIDE')} />
        <BigButton label="INTERNA" secondary onClick={this.onButtonClick('INSIDE')} />
      </div>
    );
  }
}

export default Doors;
