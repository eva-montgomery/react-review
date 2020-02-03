import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Greet';

function App() {
  return (
    <div>
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


