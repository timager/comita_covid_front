import React, {Component} from "react";
import "./../assets/css/Slot.css";

class Slot extends Component {
    render() {
        let slot = this.props.slot;
        return (
            <div className={"slot"}>
                <div className={"slot_header"}>
                    <div>{slot.time}</div>
                </div>
                <div className={"slot_body"}>

                </div>
            </div>
        );
    }
}

export default Slot;