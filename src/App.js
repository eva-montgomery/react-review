import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Counter from './Counter';

// I want to move the state of the counters and their bahavior into the App
// I have to "lift state up" so that the Counters can share state (and behavior)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      values: [
        7657,
        99
      ]
    };
  }
  render () {
    return (
      <div>
        <Counter 
        value={this.state.values[0]}
        changeBy={2}
        clickHandler={this._updateValue}
        index={0}
        />
        <Counter 
        value={this.state.values[1]}
        changeBy={33}
        clickHandler={this._updateValue}
        index={1}
        />
        
      </div>
    );
  }

  _updateValue = (index, newValue) => {
    // make a copy of the current values array
      const newValues = [
        ...this.state.values
      ];
      // modify the copy
      newValues[index] = newValue;

      // update state with the new copy
      this.setState({
        values: newValues
      });
  }

}

export default App;


