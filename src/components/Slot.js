import React, {Component} from "react";
import "./../assets/css/Slot.css";
import {openModal} from "../modal_fix";
import MeetingsForm from "./MeetingsForm";

class Slot extends Component {
    constructor(props) {
        super(props);
        this.openMeetingForm = this.openMeetingForm.bind(this);
    }

    render() {
        let slot = this.props.slot;
        let slotBody = '';
        if (slot['is_actual']) {
            let mine = false;
            slot.meets.forEach(meet => {
                if (meet['guest']['id'] === this.props.currentUser['id']) {
                    mine = true;
                }
                if (meet['creator']['id'] === this.props.currentUser['id']) {
                    mine = true;
                }
            });
            let className = "available";
            if (slot.meets.length >= 10) {
                className = "closed";
            }
            let onclick = this.openMeetingForm;
            if (mine) {
                className = "mine";
                onclick = () => {
                };
            }
            slotBody =
                <div className={className} onClick={onclick}>
                    {slot.meets.length + " из 10"}
                </div>;
        } else {
            slotBody = <div className={"timeout"}>X</div>;
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

    openMeetingForm() {
        openModal(<MeetingsForm slot={this.props.slot} loadSlots={this.props.loadSlots}/>)
    }
}

export default Slot;