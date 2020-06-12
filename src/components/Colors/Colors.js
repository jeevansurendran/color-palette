import React, { Component } from 'react'
import Color from './Color/Color'
import Add from '../Add/Add'

class Colors extends Component {

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
            add: {
                showPicker: false,
                color: {
                    r: 241,
                    g: 112,
                    b: 19
                }
            }
        };
    }
    render() {
        var style = {
            textAlign: "center"
        }
        const colors = this.state.colors.map((color, index) => {
            return <Color
                color={color}
                key={index}
                index={index}
                click={this.handleClick}
                change={this.handleChange}
                close={this.handleClose}
                delete={this.handleDelete}
            />
        })
        colors.push(
            <Add
                key={colors.length}
                add={this.state.add}
                close={this.addClose}
                click={this.addClick}
                change={this.addChange}
                cancel={this.addCancel}
            />)
        return <div style={style}>
            {colors}
        </div>
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

    handleClose = (index) => {
        const newState = { ...this.state }
        newState.colors[index].showPicker = false
        this.setState(newState)
    }

    handleDelete = (index) => {
        const newState = { ...this.state }
        newState.colors.splice(index, 1)
        this.setState(newState)
    }

    addClick = () => {
        const newState = { ...this.state }
        newState.colors.forEach(ele => {
            ele.showPicker = false
        })
        newState.add.showPicker = true
        this.setState(newState)
    }
    addChange = (color) => {
        const newState = { ...this.state }
        newState.add.color = color
        this.setState(newState)
    }

    addClose = () => {
        console.log('close')
        const newState = { ...this.state }
        newState.add.showPicker = false
        console.log(newState)
        newState.colors.push({ showPicker: false, color: newState.add.color.rgb })
        this.setState(newState)
    }
    addCancel = () => {
        console.log('cancel')
        const newState = { ...this.state }
        newState.add.showPicker = false
        this.setState(newState)
    }
}

export default Colors