import React from 'react';
import './App.css';
import Colors from '../components/Colors/Colors';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: [
        {
          showPicker: false,
          color: {
            r: '200',
            g: '222',
            b: '0',
            a: '1',
          }
        }, {
          showPicker: false,
          color: {
            r: '241',
            g: '112',
            b: '19',
            a: '1',
          }
        }, {
          showPicker: false,
          color: {
            r: '241',
            g: '112',
            b: '19',
            a: '1',
          }
        }, {
          showPicker: false,
          color: {
            r: '241',
            g: '112',
            b: '19',
            a: '1',
          }
        }

      ]
    };
  }
  render() {

    return (
      <div>
        <Colors colors={this.state.colors}
          click={this.handleClick}
          change={this.handleChange} />
      </div>
    )
  }
  
  handleClick = (index) => {
    const newState = { ...this.state }
    const isOpen = newState.colors[index].showPicker
    newState.colors.forEach(ele => {
      ele.showPicker = false
    })
    newState.colors[index].showPicker = !isOpen
    this.setState(newState)
  };
  handleChange = (index, color) => {
    const newState = { ...this.state }
    newState.colors[index].color = color.rgb
    this.setState(newState)
  };

}
export default App;