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
            r: 200,
            g: 222,
            b: 0,
            a: 1,
          }
        }, {
          showPicker: false,
          color: {
            r: 241,
            g: 112,
            b: 19,
            a: 1,
          }
        }, {
          showPicker: false,
          color: {
            r: 241,
            g: 112,
            b: 19,
            a: 1,
          }
        }, {
          showPicker: false,
          color: {
            r: 241,
            g: 112,
            b: 19,
            a: 1,
          }
        }
      ],
      add : {
        showPicker:false,
        color: {
          r: 241,
          g: 112,
          b: 19
        }
      }
    };
  }
  render() {

    return (
      <div>
        <Colors 
          colors={this.state.colors}
          add ={this.state.add}
          addClick={this.addClick}
          addClose = {this.addClose}
          addCancel = {this.addCancel}
          addChange={this.addChange}
          colorClick={this.handleClick}
          colorChange={this.handleChange}
          colorClose = {this.handleClose} 
          colorDelete = {this.handleDelete}/>
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

  handleClose = (index)=> {
    const newState ={...this.state}
    newState.colors[index].showPicker = false
    this.setState(newState)
  }

  handleDelete = (index) => {
    const newState = {...this.state}
    newState.colors.splice(index, 1)
    this.setState(newState)
  }
  
  addClick = () => {
    const newState  ={...this.state}
    newState.colors.forEach(ele => {
      ele.showPicker = false
    })
    newState.add.showPicker = true
    this.setState(newState)
  }
  addChange =(color) => {
    const newState = {...this.state}
    newState.add.color = color
    this.setState(newState)
  }

  addClose = () => {
    console.log('close')
    const newState = {...this.state}
    newState.add.showPicker = false
    console.log(newState)
    newState.colors.push({showPicker:false, color: newState.add.color.rgb})
    this.setState(newState)
  }
  addCancel =() => {
    console.log('cancel')
    const newState = {...this.state}
    newState.add.showPicker = false
    this.setState(newState)
  }
}
export default App;