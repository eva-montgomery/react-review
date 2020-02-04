import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        // "register" Counter as a normal React.Component
        super(props)
        // use React.Component's constructor to set up Counter to work with React
        
        
        this.state = {
            initialValie: props.value,
            // changeBy: props.changeBy
        };
    }
    render () {
        return (
            <div>

                <h1>{this.props.value}</h1>
                <button onClick={this.props.addHandler}>+</button>
                <button onClick={this.props.subtractHandler}>-</button>
                <button onClick={this._resetValue}>*</button>
            </div>
    
        );
    }

    // write helper functions as arrow function. Arrow functions
    // retain the correct value of the `this` keyword.
    _incrementValue = () => {
        const newVal = this.props.value + this.props.changeBy;
        this.props.clickHandler(this.props.index, newVal);
    
    //     this.setState({
    //         value: this.state.value + this.state.changeBy
     
    // });
    }

    _decrementValue = () => {
        const newVal = this.props.value - this.props.changeBy;
        this.props.clickHandler(this.props.index, newVal);
        // this.setState({
        //     value: this.state.value - this.state.changeBy
        // });
    }

    _resetValue = () => {
        this.props.clickHandler(this.props.index, this.state.initialValie);
        // this.setState({
        //     value: this.props.initialValue
        // });

    }

}

export default Counter;