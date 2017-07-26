import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import Doors from '../Doors';
import styles from './index.css';

class App extends Component {
  state = {
    slideIndex: 0,
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div className={styles.app}>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Tab One" value={0} />
          <Tab label="Tab Two" value={1} />
          <Tab label="Tab Three" value={2} />
        </Tabs>
        <SwipeableViews
          className={styles.main}
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div className={styles.slide}>
            <Doors />
          </div>
          <div className={styles.slide}>
            slide n°2
          </div>
          <div className={styles.slide}>
            slide n°3
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default App;
