import React from 'react';
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color';
import './App.css';
import Colors from '../components/Colors/Colors';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: [
        {
          r: '241',
          g: '112',
          b: '19',
          a: '1',
        }, {
          r: '241',
          g: '112',
          b: '19',
          a: '1',
        }, {
          r: '241',
          g: '112',
          b: '19',
          a: '1',
        },{
          r: '241',
          g: '112',
          b: '19',
          a: '1',
        },{
          r: '241',
          g: '112',
          b: '19',
          a: '1',
        },{
          r: '241',
          g: '112',
          b: '19',
          a: '1',
        },

      ]
    };
  }

  render() {
    return (
      <div>
        <Colors colors={this.state.colors} />
      </div>
    )
  }
}
export default App;