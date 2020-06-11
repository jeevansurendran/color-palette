import React, {Component} from 'react'

const withSwatch = WrappedComponent => {
    class WithSwatch extends Component {
        render() {
            return <WrappedComponent
            index={this.props.index}
            click={this.props.click}
            change={this.props.change}
            color={this.props.color}
            />
        }
    }
    return WithSwatch
}

export default withSwatch