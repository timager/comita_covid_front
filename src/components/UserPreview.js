import React, {Component} from "react";
import "./../assets/css/UserPreview.css";
import {faPhone, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import {BASE_URL} from "../const";
import {openModal} from "../modal_fix";
import UserForm from "./UserForm";

class UserPreview extends Component {
    constructor(props) {
        super(props);
        this.deleteHandler = this.deleteHandler.bind(this);
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
                    <FontAwesomeIcon onClick={()=>openModal(<UserForm user={user}/>)} className={"min_btn green"} icon={faEdit}/>
                    <br/>
                    <FontAwesomeIcon onClick={this.deleteHandler} className={"min_btn red"} icon={faTrash}/>
                </div>
            </div>
        );
    }

    deleteHandler() {
        axios.post(BASE_URL + "/api/users/" + this.props.user.id + "/delete")
            .then(res => this.props.loadUsers())
    }

}


export default UserPreview;