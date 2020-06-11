import React, { Component } from 'react'

const withSwatch = WrappedComponent => {
    class WithSwatch extends Component {
        render() {
            return <WrappedComponent
                index={this.props.index}
                click={this.props.click}
                change={this.props.change}
                color={this.props.color}
                add = {this.props.add}
                addClose = {this.props.addClose}
                addClick={this.props.addClick}
                addChange={this.props.addChange}
                addCancel = {this.props.addCancel}
            />
        }
    }
    return WithSwatch
}

export default withSwatch