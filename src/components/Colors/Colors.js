import React from 'react'
import Color from './Color/Color'
import Add from '../Add/Add'

const Colors = props => {
    var style = {
        textAlign: "center"
    }
    console.log(props)
    const colors = props.colors.map((color, index) => {
        return <Color color={color}
            key={index}
            index={index}
            click={props.colorClick}
            change={props.colorChange}
        />
    })
    colors.push(<Add
        key={colors.length}
        add={props.add}
        addClose={props.addClose}
        addClick={props.addClick}
        addChange={props.addChange}
        addCancel = {props.addCancel}
    />)
    return <div style={style}>
        {colors}
    </div>
}

export default Colors