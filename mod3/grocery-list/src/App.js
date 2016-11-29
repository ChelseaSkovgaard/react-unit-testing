import React, { Component } from 'react';
import './App.css';
import GroceryList from './GroceryList';

class App extends Component {
  render() {
    return (
      <GroceryList groceries={[
        {id: 1, name:"Banana"},
        {id: 2, name: "Apple"}
      ]}/>
    );
  }
}

export default App;
