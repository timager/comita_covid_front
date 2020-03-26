import React, {Component} from "react";
import "./../assets/css/MeetingsForm.css";
import Loader from "react-loader-spinner";
import UserSelectOption from "./UserSelectOption";
import axios from "axios";
import {BASE_URL} from "../const";
import Button from "./Button";
import {closeModal} from "../modal_fix";
import {confirmAlert} from "react-confirm-alert";

class MeetingsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null,
            companion: null
        };
        this.sendInvite = this.sendInvite.bind(this);
    }

    componentDidMount() {
        let self = this;
        axios.post(BASE_URL + "/api/users/get").then(res => {
                this.setState({users: res['data']});
                console.log(self.state.users)
            }
        )
    }

    render() {
        let select = <Loader type="Oval" width={200} height={50}/>;
        if (this.state.users) {
            select = <select onChange={e => this.setState({companion: e.target.value})}>
                {this.state.users.map(user => <UserSelectOption user={user}/>)}
            </select>
        }
        return (
            <div className={"meetings_form"}>
                <p>Встреча на {this.props.slot['time']}</p>
                <label>с {select}</label>
                <Button onClick={this.sendInvite}>Пригласить</Button>
            </div>
        );
    }

    sendInvite() {
        axios.post(BASE_URL + "/api/users/invite/" + this.state.companion + "/slot/" + this.props.slot.id).then(
            res => {
                this.props.loadSlots();
                closeModal();
                confirmAlert({
                    title: 'Готово',
                    message: 'Приглашение отправлено',
                    buttons: [
                        {
                            label: 'Ок'
                        }
                    ]
                })
            }
        ).catch(
            e => confirmAlert({
                title: 'Ошибка',
                message: e.response.data,
                buttons: [
                    {
                        label: 'Ок'
                    }
                ]
            })
        )
    }
}

export default MeetingsForm;