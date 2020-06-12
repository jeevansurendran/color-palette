import React, { Component } from "react";
import styles from "./Add.module.css"
import { PhotoshopPicker } from 'react-color'

class Add extends Component {
    render() {
        return (
            <div className={styles.swatch}>
                <div className={styles.color} onClick={this.props.addClick} >
                    <p className={styles.plus}>+</p>
                </div>
                {this.props.add.showPicker ? <div className={styles.popover}>
                <PhotoshopPicker color={this.props.add.color}
                        onAccept={this.props.addClose}
                        onCancel={this.props.addCancel}
                        onChange={this.props.addChange} />
                </div> : null}
                <p>.</p>
                <p>.</p>
                <p>.</p>
            </div>
        );
    }
}
export default Add;