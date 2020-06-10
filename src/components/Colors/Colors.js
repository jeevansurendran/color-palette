import React from 'react'
import Color from './Color/Color'

const Colors = props => {
    var style = {
        textAlign: "center"
    }
    return <div style={style}>
        {props.colors.map((color, index) => {
            return <Color color={color} key={index} />
        })}
    </div>
}

export default Colors