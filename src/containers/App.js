import React from 'react';
import './App.css';
import Colors from '../components/Colors/Colors';

const App  = props => {

    const colorHeadingStyle = {
      margin:'20px',
      
    }  

    return (
      <div>
        <h3 style={colorHeadingStyle}>Color palette (click + to add colors)</h3>
        <Colors />
      </div>
    )
}
export default App;