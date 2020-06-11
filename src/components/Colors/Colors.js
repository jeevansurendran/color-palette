import React from 'react'
import Color from './Color/Color'
import Add from '../Add/Add'
import Fake from '../Fake/Fake'

const Colors = props => {
    var style = {
        textAlign: "center"
    }   

    const colors = props.colors.map((color, index) => {
        return <Color color={color}
            key={index}
            index={index}
            click={props.click}
            change={props.change}
        />
    })
    colors.push(<Add
        key = {colors.length}
    />)
    return <div style={style}>
        {colors}
    </div>
}

export default Colors