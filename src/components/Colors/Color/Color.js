import React, { Component } from "react";
import { SketchPicker } from "react-color";
import styles from "./Color.module.css";

class Color extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isShowingOverlay: false
        }
    }

    showOverlay = () => {
        this.setState({ isShowingOverlay: true })
    }

    hideOverlay = () => {
        this.setState({ isShowingOverlay: false })
    }


    render() {
        const style = {
            background: `rgba(${this.props.color.color.r}, ${this.props.color.color.g}
                , ${this.props.color.color.b}, ${this.props.color.color.a})`,
        };
        return (
            <div className={styles.swatch} >
                <div>
                    <input className={styles.name} value={this.props.color.name}
                    onChange={(e)=>this.props.nameChange(this.props.index, e)}/>
                    <div style={style} className={styles.color} onMouseOver={this.showOverlay} onMouseLeave={this.hideOverlay}>
                        {this.state.isShowingOverlay ? (<div className={styles.overlay}>
                            <button onClick={this.props.click.bind(this, this.props.index)}>edit</button>
                            <button onClick={this.props.delete.bind(this, this.props.index)}>delete</button>                            
                            </div>) : null}
                    </div>
                    <p> {formatRgbToHex(this.props.color.color)} </p>
                    <p> {formatRgb(this.props.color.color)} </p>
                    <p> {formatRbgToCmyk(this.props.color.color)} </p>
                </div>
                {this.props.color.showPicker ? (
                    <div className={styles.popover}>
                        <div className={styles.cover} onClick={this.props.close.bind(this, this.props.index)} />
                        <SketchPicker
                            color={this.props.color.color}
                            onChange={(color) =>
                                this.props.change(this.props.index, color)
                            }
                        />
                    </div>
                ) : null}

            </div>
        );
    }
}



const formatRgbToHex = (color) => {
    return "HEX #" + ((1 << 24) + (color.r << 16) + (color.g << 8) + color.b).toString(16).slice(1).toUpperCase();
};

const formatRgb = (color) => {
    return `RGB ${color.r} / ${color.g} / ${color.b}`;
};
const formatRbgToCmyk = (color) => {
    const r = color.r / 255;
    const g = color.g / 255;
    const b = color.b / 255;

    let k = Math.min(1 - r, 1 - g, 1 - b);
    let c = (1 - r - k) / (1 - k);
    let m = (1 - g - k) / (1 - k);
    let y = (1 - b - k) / (1 - k);

    c = Math.round(c * 100);
    m = Math.round(m * 100);
    y = Math.round(y * 100);
    k = Math.round(k * 100);

    return `CMYK ${c} / ${m} / ${y} / ${k}`;
};

export default Color;
