import React, {Component} from "react";

class UserSelectOption extends Component {
    render() {
        let user = this.props.user;
        let text = user.name + " " + user.surname + " (" + user.position + " в " + user.company + ")";
        return (<option value={user.id}>{text}</option>);
    }
}

export default UserSelectOption;