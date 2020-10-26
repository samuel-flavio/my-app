import React, {Component} from 'react';
import './App.css';
import Teclado from "./componentes/Teclado.js";


function Display(props) {
  return(
    <div className="display">
        <p>{props.result}</p>
    </div>
  );
}

class App extends Component {
  state = {
    result: '',
    valor: ''
  }

  buttonPressed = buttonName => {
    if (buttonName === '*' || buttonName === '/' || buttonName === '+' || buttonName === '-' || buttonName === '='){
      this.setState({
        valor: this.state.result + buttonName
      })
    }
    if (buttonName === 'AC'){
      this.setState({
        valor: this.state.valor + this.state.result,
        result: ''
      })
    } else if(buttonName === '='){
          this.calculate()
        } else
          this.setState({
            result: this.state.result + buttonName
          });
  };

  calculate = () => {
    this.setState({
      result: eval(this.state.result)
    });
  };

  render() {
    return (
      <div className="App">
        <Display className="display" result={this.state.valor}/>
        <Display className="display" result={this.state.result}/>
        <Teclado buttonPressed={this.buttonPressed}/>
      </div>
    );
  }
}
export default App;