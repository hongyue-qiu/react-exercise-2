import React, { Component } from 'react';
import './App.scss';
import Header from './header.js';
import AllPhone from './allPhone.js';

class App extends Component {
  // state = {
  //     phones: [],
  //     cartNum:8
  // };
  //
  // async componentDidMount(){
  //     const result = await fetch("http://localhost:3000/products");
  //     const data = await result.json();
  //     this.setState({
  //         phones: data
  //     });
  // }

  render() {
    return (
      <main className="app">
        <Header />
        <AllPhone />
      </main>
    );
  }
}

export default App;
