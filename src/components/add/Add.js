import React, { Component } from "react";
import styles from "./Add.module.css"
import withSwatch from '../../hoc/withSwatch'

class Add extends Component {
    render() {
        return (
            <div className={styles.swatch}>
                <div className={styles.color} >
                    <p className={styles.plus}>+</p>
                </div>
                <p>.</p>
                <p>.</p>
                <p>.</p>
            </div>
        );
    }
}
export default withSwatch(Add);