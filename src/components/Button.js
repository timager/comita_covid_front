import React, {Component} from "react";
import "./../assets/css/Button.css";

class Button extends Component {
    render() {
        return (
            <button className={"default_button f_norm "+this.props.className}>{this.props.children}</button>
        );
    }
}

export default Button;