import React, {Component} from "react";
import Input from "./Input";
import Button from "./Button";
import "./../assets/css/UserForm.css";


class UserForm extends Component {

    constructor(props) {
        super(props);
        this.state = {...this.props.user};
    }

    render() {
        return (
            <div className={"user_form"}>
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
                               this.setState({access: e.target.value})
                           }}/>
                </label>
                <div>
                    <Button>Сохранить</Button>
                </div>
            </div>
        );
    }
}

export default UserForm;