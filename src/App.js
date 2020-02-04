import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Counter from './Counter';

function App() {
  return (
    <div>
      <Counter 
      initialValue={10}
      changeBy={2}
      />
      <Counter 
      initialValue={99}
      changeBy={33}
      />
      <Counter 
      initialValue={-5}
      changeBy={8}/>
      <Greet 
      whom="Cthulu"
      how="S'up"
      />
       <Greet 
      whom="Doctor Who"
      how="Allo"
      />
       <Greet 
      whom="You"
      how="Hey"
      color="blue"
      />
    </div>
  );
}

export default App;


