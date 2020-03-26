import React, {Component} from "react";
import "./../assets/css/LoginPage.css";
import Button from "./Button";
import Input from "./Input";

class LoginPage extends Component {
    render() {
        return (
            <div className={"login_page"}>
                <div className={"header"}>ATO EVENTS</div>
                <div className={"center_text"}>
                    <p className={"f_norm"}>Brainstorming</p>
                    <p className={"f_large f_bold"}>Преодоление COVID-19</p>
                    <p className={"f_large f_bold"}>для индустрии транспорта</p>
                    <Button>Программа конференции</Button>
                </div>
                <div className={"login_form"}>
                    <p className={"f_large f_bold"}>Добро пожаловать в прямой эфир</p>
                    <div>
                        <Input type={"text"} placeholder={"логин"}/>
                        <Input type={"password"} placeholder={"пароль"}/>
                        <Button>Войти</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;