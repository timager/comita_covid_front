import React, {Component} from "react";
import "./../assets/css/Slot.css";

class Slot extends Component {
    render() {
        let slot = this.props.slot;
        console.log(slot);
        let slotBody = <div className={"available"}/>;
        if (!slot['is_actual']) {
            if (slot.meets.length > 0) {
                slotBody =
                    <div className={slot.meets.length >= 10 ? "closed" : "available"}>
                        {slot.meets.length + " из 10"}
                    </div>;
                let mine = false;
                slot.meets.forEach(meet => {
                    if (/*meet['guest']['id'] === this.props.currentUser['id']*/true) {
                        mine = true;
                    }
                });
                if (mine) {
                    slotBody =
                        <div className={"mine"}>
                            {slot.meets.length + " из 10"}
                        </div>
                }
            }
        } else {
            slotBody = <div className={"timeout"}/>;
        }

        return (
            <div className={"slot"}>
                <div className={"slot_header"}>
                    <div>{slot.time}</div>
                </div>
                <div className={"slot_body"}>
                    {slotBody}
                </div>
            </div>
        );
    }
}

export default Slot;