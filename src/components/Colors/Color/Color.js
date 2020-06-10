import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import styles from './Color.module.css'

class Color extends Component {

    rgbtoHex = color => {

    }

    render() {
        const style = {
            background: `rgba(${this.props.color.r}, ${this.props.color.g}, ${this.props.color.b}, ${this.props.color.a})`,
        }
        return (
            <div className={styles.swatch}>
                <p>Background</p>
                <div style={style} className={styles.color} />
                <p>{formatRgbToHex(this.props.color)}</p>
                <p>{formatRgb(this.props.color)}</p>
                <p>{formatRbgToCmyk(this.props.color)}</p>
            </div>
        );
    }
}

 const componentToHex = c => {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

const formatRgbToHex = color => {
    return `HEX #${componentToHex(color.r)}${componentToHex(color.g)}${componentToHex(color.b)}`
}

const formatRgb = color => {
    return `RGB ${color.r} / ${color.g} / ${color.b}`
}
const formatRbgToCmyk = color => { 
    const r = color.r / 255;
    const g = color.g / 255;
    const b = color.b / 255;

    let k = Math.min( 1 - r, 1 - g, 1 - b );
    let c = ( 1 - r - k ) / ( 1 - k );
    let m = ( 1 - g - k ) / ( 1 - k );
    let y = ( 1 - b - k ) / ( 1 - k );

    c = Math.round( c * 100 );
    m = Math.round( m * 100 );
    y = Math.round( y * 100 );
    k = Math.round( k * 100 );

    return `CMYK ${c} / ${m} / ${y} / ${k}`
}

export default Color;