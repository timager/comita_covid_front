import React, {Component} from "react";
import axios from "axios";
import {BASE_URL} from "../const";
import Loader from 'react-loader-spinner';
import UserPreview from "./UserPreview";
import "./../assets/css/UsersPage.css";
import Button from "./Button";
import {openModal} from "../modal_fix";
import UserForm from "./UserForm";

class UsersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null
        };
        this.loadUsers = this.loadUsers.bind(this);
    }

    componentDidMount() {
        this.loadUsers()
    }

    loadUsers() {
        let self = this;
        axios.post(BASE_URL + "/api/users/get").then(res => {
                this.setState({users: res['data']});
                console.log(self.state.users)
            }
        )
    }

    render() {

        let users = '';
        if (this.state.users == null) {
            users = <Loader type="Oval" width={200} height={200}/>;
        } else {
            users = this.state.users.map(user => <UserPreview key={user['id']} user={user} loadUsers={this.loadUsers}/>)
        }
        return (
            <div className={"users_page"}>
                <a style={{margin: "15px 15px 15px 95%", color:"black"}} href="/api/logout">Выйти</a>
                <p className={"f_large f_bold"}>Настройка пользователей</p>
                <Button onClick={() => {
                    openModal(<UserForm loadUsers={this.loadUsers}/>)
                }} className={"btn_add"}>Добавить пользователя</Button>
                <div className={"users_list"}>
                    {users}
                </div>
            </div>
        );
    }
}

export default UsersPage;