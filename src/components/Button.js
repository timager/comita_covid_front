import React, {Component} from "react";
import "./../assets/css/Button.css";

class Button extends Component {
    render() {
        return (
            <button onClick={this.props.onClick} className={"default_button f_norm "+this.props.className}>{this.props.children}</button>
        );
    }
}

export default Button;