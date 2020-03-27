import React, {Component} from "react";
import "./../assets/css/UserPreview.css";
import {faPhone, faEdit, faTrash, faKey} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import {BASE_URL} from "../const";
import {openModal} from "../modal_fix";
import UserForm from "./UserForm";
import {confirmAlert} from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class UserPreview extends Component {
    constructor(props) {
        super(props);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.recoverPassword = this.recoverPassword.bind(this);
    }

    render() {
        let user = this.props.user;
        return (
            <div className={"user_preview"}>
                <div className={"user_data"}>
                    <p>{user['name'] + " " + user['surname']}</p>
                    <p>{user['position'] + " в " + user['company']}</p>
                    <p><FontAwesomeIcon icon={faPhone}/> {user['phone']}</p>
                </div>
                <div>
                    <FontAwesomeIcon onClick={() => {
                        openModal(<UserForm loadUsers={this.props.loadUsers} user={user}/>)
                    }
                    } className={"min_btn green"}
                                     icon={faEdit}/>
                    <br/>
                    <FontAwesomeIcon onClick={this.deleteHandler} className={"min_btn red"} icon={faTrash}/>
                    <FontAwesomeIcon onClick={this.recoverPassword} className={"min_btn blue"} icon={faKey}/>
                </div>
            </div>
        );
    }

    deleteHandler() {
        confirmAlert({
            title: 'Удаление',
            message: 'Вы уверены что хотите удалить этого пользователя?',
            buttons: [
                {
                    label: 'Да',
                    onClick: () => axios.post(BASE_URL + "/api/users/" + this.props.user.id + "/delete")
                        .then(res => this.props.loadUsers()).catch(
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
                },
                {
                    label: 'Отмена'
                }
            ]
        });
    }

    recoverPassword() {
        confirmAlert({
            title: 'Восстановление',
            message: 'Вы уверены что хотите сгенерировать и отправить на почту пользователя новый пароль?',
            buttons: [
                {
                    label: 'Да',
                    onClick: () => axios.post(BASE_URL + "/api/users/" + this.props.user.id + "/recovery")
                        .then(res => this.props.loadUsers()).catch(
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
                },
                {
                    label: 'Отмена'
                }
            ]
        });
    }




}


export default UserPreview;