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
            companion: null,
            air: false,
            airport: false,
            transport: false
        };
        this.sendInvite = this.sendInvite.bind(this);
        this.getUsers = this.getUsers.bind(this);
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers(){
        let self = this;
        let data = {
            air:self.state.air,
            airport:self.state.airport,
            transport:self.state.transport
        };
        axios.post(BASE_URL + "/api/users/get", data).then(res => {
            self.setState({users: res['data']});
            if(res['data'].length > 0){
                self.setState({companion: res['data'][0].id});
            }
                // console.log(self.state.users)
            }
        )
    }

    render() {
        let select = <Loader type="Oval" width={200} height={50}/>;
        if (this.state.users) {
            select = <select onChange={event => {this.setState({companion: event.target.value})}}>
                {this.state.users.map((user, id) => {return <UserSelectOption user={user}/>})}
            </select>
        }
        return (
            <div className={"meetings_form"}>
                <p>Встреча на {this.props.slot['time']}</p>
                <label>с {select}</label>
                <label className={"access_label"}>авиакомпании
                    <input type={"checkbox"} checked={this.state.air}
                           onChange={e => {
                               this.setState({air: e.target.checked}, ()=>{this.getUsers();})
                           }}/>
                </label>
                <label className={"access_label"}>аэропорты
                    <input type={"checkbox"} checked={this.state.airport}
                           onChange={e => {
                               this.setState({airport: e.target.checked}, ()=>{this.getUsers();})
                           }}/>
                </label>
                <label className={"access_label"}>поток: грузовой транспорт
                    <input type={"checkbox"} checked={this.state.transport}
                           onChange={e => {
                               this.setState({transport: e.target.checked}, ()=>{this.getUsers();})
                           }}/>
                </label>
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