import React, {Component} from "react";
import "./../assets/css/Input.css";

class Input extends Component {
    render() {
        return (
            <input className={"default_input f_norm"}
                   type={this.props.type}
                   id={this.props.id}
                   value={this.props.value}
                   placeholder={this.props.placeholder}
                   onChange={this.props.onChange}/>
        );
    }
}

export default Input;