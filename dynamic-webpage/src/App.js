import React from 'react';
import './App.css';
import Heading from './heading';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardBody from './Card';
import AddItem from './AddItem';
import Counter from './counter';
import Ternary from './Ternary'


function App() {
  return (
    <div className="">
        <Heading />
        <Counter />
        <CardBody />
        <AddItem />
        <Ternary />
    </div>
  );
}

export default App;
