import React, {Component} from "react";
import "./../assets/css/MeetingsPage.css";
import axios from "axios";
import {BASE_URL} from "../const";
import Loader from "react-loader-spinner";
import Slot from "./Slot";

class MeetingsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slots: null
        };
        this.loadSlots = this.loadSlots.bind(this);
    }

    componentDidMount() {
        this.loadSlots()
    }

    loadSlots() {
        let self = this;
        axios.post(BASE_URL + "/api/slots/get").then(
            res => self.setState({slots: res['data']})
        )
    }

    render() {
        let slots = '';
        if (this.state.slots == null) {
            slots = <Loader type="Oval" width={200} height={200}/>;
        } else {
            slots = this.state.slots.map(slot => <Slot currentUser={this.props.currentUser} key={slot['id']} slot={slot} currentUser={this.props.currentUser}
                                                       loadSlots={this.loadSlots}/>)
        }
        return (
            <div className={"meetings_page"}>
                <p className={"f_norm f_bold header"}>ATO EVENTS</p>
                {this.props.currentUser.role === 'ROLE_ADMIN' ?
                    <a className={"f_bold f_norm"} href={"/users"}>Перейти к настройкам</a> : ''}
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