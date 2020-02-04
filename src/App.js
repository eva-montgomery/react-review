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
        99,
        33,
        344354,
        3423
      ],
      changeBy: [
        2,
        33,
        1,
        1,
        1
      ]
    };
  }
  render () {
    return (
      <div>

        {

          this.state.values.map((num, index) => {
            return (
              <Counter 
              key={index}
              index={index}
              value={num}
              addHandler={() => {
                this._incrementAll(this.state.changeBy[index])
            }}
              subtractHandler={() => {
                this._decrementAll(this.state.changeBy[index])
              }}
              resetHandler={this._updateValue}
              />
            )
          })
 



        }
     
        {/* <Counter 
        value={this.state.values[1]}
        // changeBy={this.state.changeBy[1]}
        addHandler={() => {
          this._incrementAll(this.state.changeBy[1])
        }}
          subtractHandler={() => {
            this._decrementAll(this.state.changeBy[1])
          }}
          resetHandler={this._updateValue}
        index={1}
        /> */}
        
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
  _incrementAll = (howMuch) => {
    const newValues = 
    this.state.values.map(num => num + 1);
    this.setState({
      values: newValues
    })
  } 
  _decrementAll = (howMuch) => {
    const newValues = 
    this.state.values.map(num => num - 1);
    this.setState({
      values: newValues
    })
  }
}

export default App;


