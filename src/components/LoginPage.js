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
                console.log(res)
            })
            .catch(
                e => confirmAlert({
                    title: 'Ошибка авторизации',
                    message: "Неверные данные для входа",
                    buttons: [
                        {
                            label: 'Ок'
                        }
                    ]
                })
            )
    }
}

export default LoginPage;