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
    valor: '',
    memory: ''
  }

  buttonPressed = buttonName => {
    if (buttonName ==='MR' || buttonName ==='MC' || buttonName ==='M+' || buttonName ==='M-'){
      if (buttonName === 'M+'){
        this.setState({
          memory: this.state.memory + this.state.result
        })
      };
      if (buttonName === 'M-'){
        this.setState({
          memory: this.state.memory - this.state.result
        })
      };
      if (buttonName === 'MR'){
        this.setState({
          result: this.state.memory
        })
      };
      if (buttonName === 'MC'){
        this.setState({
          result: '',
          memory: ''
        })
      };
    } else {
        if (buttonName === '*' || buttonName === '/' || buttonName === '+' || buttonName === '-' || buttonName === '='){
          this.setState({
            valor: this.state.result + buttonName
          })
        }
        if (buttonName === 'AC'){
          this.setState({
            valor: this.state.result,
            result: ''
          })
        } else if(buttonName === '='){
              this.calculate()
            } else
              this.setState({
                result: this.state.result + buttonName
              });
      };
    };

  calculate = () => {
    this.setState({
      result: eval(this.state.result)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="principal">
          <Display className="display" result={this.state.valor}/>
          <Display className="display" result={this.state.result}/>
          <Teclado buttonPressed={this.buttonPressed}/>
        </div>
        <div className="memoria">
          <h2>Memória</h2>
          <Display result={this.state.memory}/>
        </div>
      </div>
    );
  }
}
export default App;