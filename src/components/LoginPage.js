import React, {Component} from "react";
import "./../assets/css/LoginPage.css";
import Button from "./Button";
import axios from "axios";
import Input from "./Input";
import {BASE_URL} from "../const";
import {confirmAlert} from "react-confirm-alert";

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.loginClick = this.loginClick.bind(this);
        this.openRecoveryModal = this.openRecoveryModal.bind(this);
        this.sendRecovery = this.sendRecovery.bind(this);
        this.state = {
            login: null,
            pass: null
        }
    }

    render() {
        return (
            <div className={"login_page"}>
                <div className={"header"}>ATO EVENTS</div>
                <div className={"center_text"}>
                    <p className={"f_norm"}>Brainstorming</p>
                    <p className={"f_large f_bold"}>Преодоление COVID-19</p>
                    <p className={"f_large f_bold"}>для индустрии транспорта</p>
                    <a target={"_blank"}
                       href={"http://live.covid-transport.ru/symfony/public/Covid-2020-rus.pdf"}><Button
                        className={"conf_button"}>Программа конференции</Button></a>
                </div>
                <div className={"login_form"}>
                    <p className={"f_large f_bold"}>Добро пожаловать в прямой эфир</p>
                    <div>
                        <Input type={"text"} placeholder={"логин"} onChange={e => {
                            this.setState({login: e.target.value})
                        }}/>
                        <Input type={"password"} placeholder={"пароль"} onChange={e => {
                            this.setState({pass: e.target.value})
                        }}/>
                        <Button onClick={this.loginClick}>Войти</Button>
                    </div>
                </div>
            </div>
        )
    }

    loginClick() {
        axios.post(BASE_URL + "/api/login", {username: this.state.login, password: this.state.pass})
            .then(res => {
                window.location.href = "/";
            })
            .catch(
                e => {
                    console.log(e);
                    confirmAlert({
                        title: 'Authentication error',
                        message: "Incorrect login or password",
                        childrenElement: () => <p onClick={this.openRecoveryModal}
                                                  className={"recovery_pass"}>Recover the data</p>,
                        buttons: [
                            {
                                label: 'Ок'
                            }
                        ]
                    })
                }
            )
    }

    openRecoveryModal() {
        confirmAlert({
                title: 'Восстановление данных',
                message: "Введите ваш email",
                childrenElement: () => <Input className={"border_blue"} onChange={e => this.setState({login: e.target.value})} type={"email"}/>,
                buttons: [
                    {
                        label: "Отправить",
                        onClick: this.sendRecovery
                    },
                    {
                        label: "Отмена"
                    }
                ]
            }
        )
    }

    sendRecovery() {
        axios.post(BASE_URL + "/api/users/repair/" + this.state.login).then(res =>
            confirmAlert({
                title: "Восстановление",
                message: "Письмо для восстановления данных отправлено на почту",
                buttons: [
                    {label: "Ок"}
                ]
            })
        ).catch(e =>
            confirmAlert({
                title: "Ошибка",
                message: "Не удалось отправить письмо (" + e.response.data + ")",
                buttons: [
                    {label: "Ок"}
                ]
            })
        )
    }
}

export default LoginPage;