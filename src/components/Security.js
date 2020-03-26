import React, {Component} from "react";
import axios from "axios";
import {closeModal} from "../modal_fix";
import {confirmAlert} from "react-confirm-alert";
import {BASE_URL} from "../const";
import Loader from "react-loader-spinner";

class Security extends Component {

    constructor(props) {
        super(props);
        this.state = {
          user: null
        };
    }

    componentDidMount() {
        axios.post(BASE_URL + "/api/users/current").then(
            res => {
                this.setState({user:res.data})
            }
        ).catch(
            e => window.location.href = "/login"
        )
    }

    render() {
        if(this.state.user){
            this.props.children(this.state.user)
        }else{
            return <Loader type="Oval" width={200} height={200}/>
        }
    }
}

export default Security;