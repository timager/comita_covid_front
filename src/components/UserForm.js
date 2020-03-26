import React, {Component} from "react";
import Input from "./Input";
import Button from "./Button";
import "./../assets/css/UserForm.css";
import axios from "axios";
import {BASE_URL} from "../const";
import {closeModal} from "../modal_fix";
import {confirmAlert} from "react-confirm-alert";

class UserForm extends Component {

    constructor(props) {
        super(props);
        this.state = {...this.props.user};
        this.saveHandler = this.saveHandler.bind(this);
    }

    render() {
        return (
            <div className={"user_form"}>
                <label>Почта
                    <Input value={this.state.login ? this.state.login : ""} onChange={e => {
                        this.setState({login: e.target.value})
                    }}/>
                </label>
                <label>Имя
                    <Input value={this.state.name ? this.state.name : ""} onChange={e => {
                        this.setState({name: e.target.value})
                    }}/>
                </label>
                <label>Фамилия
                    <Input value={this.state.surname ? this.state.surname : ""} onChange={e => {
                        this.setState({surname: e.target.value})
                    }}/>
                </label>
                <label>Должность
                    <Input value={this.state.position ? this.state.position : ""} onChange={e => {
                        this.setState({position: e.target.value})
                    }}/>
                </label>
                <label>Компания
                    <Input value={this.state.company ? this.state.company : ""} onChange={e => {
                        this.setState({company: e.target.value})
                    }}/>
                </label>
                <label>Телефон
                    <Input value={this.state.phone ? this.state.phone : ""} onChange={e => {
                        this.setState({phone: e.target.value})
                    }}/>
                </label>
                <label className={"access_label"}>Доступ ко встречам
                    <input type={"checkbox"} checked={this.state.access}
                           onChange={e => {
                               this.setState({access: e.target.checked})
                           }}/>
                </label>
                <div>
                    <Button onClick={this.saveHandler}>Сохранить</Button>
                </div>
            </div>
        );
    }

    saveHandler() {
        let url = BASE_URL + "/api/users/add";
        if (this.state.id) {
            url = BASE_URL + "/api/users/" + this.state.id + "/edit";
        }
        axios.post(url, this.state).then(
            res => {
                this.props.loadUsers();
                closeModal();
                confirmAlert({
                    title: 'Готово',
                    message: 'Пользователь сохранен',
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
                message: 'Что-то пошло не так (' + e.message + ')',
                buttons: [
                    {
                        label: 'Ок'
                    }
                ]
            })
        )
    }
}

export default UserForm;