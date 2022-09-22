import React from 'react';


class App extends React.Component {

  constructor() {
    super();
    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    };
  }
  handleButtonOne() {
    this.setState((estado, _props)=> ({
      clicksBtnOne: estado.clicksBtnOne + 1
    }))
  }

  handleButtonTwo() {
    this.setState((estado, _props)=> ({
      clicksBtnTwo: estado.clicksBtnTwo + 1
    }))
  }

  handleButtonThree() {
    this.setState((estado, _props)=> ({
      clicksBtnThree: estado.clicksBtnThree + 1
    }))
  }
  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }
  
  render() {
     const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state
    return (<><button onClick={this.handleButtonOne} style={ { backgroundColor: this.getButtonColor(clicksBtnOne) } }>Botão Um: {clicksBtnOne} </button>
              <button onClick={this.handleButtonTwo} style={ { backgroundColor: this.getButtonColor(clicksBtnTwo) } }>Botão Dois: {clicksBtnTwo}</button>
              <button onClick={this.handleButtonThree}style={ { backgroundColor: this.getButtonColor(clicksBtnThree) } }>Botão Tres: {clicksBtnThree}</button></>);
  }
};

export default App;