import React, { Component } from "react";
import styles from "./Add.module.css"
import { PhotoshopPicker } from 'react-color'

class Add extends Component {
    render() {
        return (
            <div className={styles.swatch}>
                <div className={styles.color} onClick={this.props.click} >
                    <p className={styles.plus}>+</p>
                </div>
                {this.props.add.showPicker ? <div className={styles.popover}>
                <PhotoshopPicker color={this.props.add.color}
                        onAccept={this.props.close}
                        onCancel={this.props.cancel}
                        onChange={this.props.change} />
                </div> : null}
                <p>.</p>
                <p>.</p>
                <p>.</p>
            </div>
        );
    }
}
export default Add;