import React, {Component} from "react";
import "./../assets/css/MeetingsPage.css";
import axios from "axios";
import {BASE_URL} from "../const";
import Loader from "react-loader-spinner";
import UserPreview from "./UserPreview";
import Slot from "./Slot";

class MeetingsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slots: null
        }
    }

    componentDidMount() {
        this.loadSlots()
    }

    loadSlots() {
        axios.post(BASE_URL + "/api/slots/get").then(
            res => this.setState({slots: res['data']})
        )
    }

    render() {
        let slots = '';
        if (this.state.slots == null) {
            slots = <Loader type="Oval" width={200} height={200}/>;
        } else {
            slots = this.state.slots.map(slot => <Slot key={slot['id']} slot={slot} loadSlots={this.loadSlots}/>)
        }
        return (
            <div className={"meetings_page"}>
                <p className={"f_norm f_bold header"}>ATO EVENTS</p>
                <p className={"f_large f_bold blue_text"}><span>Организация личных</span> онлайн встреч</p>

                <div className={"slots"}>
                    <p className={"slots_header f_norm f_bold"}>Свободные слоты для записи</p>
                    <div className={"slots_list"}>{slots}</div>
                </div>
            </div>
        );
    }
}

export default MeetingsPage;