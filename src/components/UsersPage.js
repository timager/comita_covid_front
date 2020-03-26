import React, {Component} from "react";
import axios from "axios";
import {BASE_URL} from "../const";
import Loader from 'react-loader-spinner';
import UserPreview from "./UserPreview";
import "./../assets/css/UsersPage.css";

class UsersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null
        };
    }

    componentDidMount() {
        this.loadUsers()
    }

    loadUsers() {
        axios.post(BASE_URL + "/api/users/get").then(res => {
                this.setState({users: res['data']});
                console.log(this.state.users)
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
                <p className={"f_large f_bold"}>Настройка пользователей</p>
                <div className={"users_list"}>
                    {users}
                </div>
            </div>
        );
    }
}

export default UsersPage;