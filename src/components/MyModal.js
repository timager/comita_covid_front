import React, {Component} from "react";
import Modal from 'react-modal';
import {setClose, setOpen} from "../modal_fix";
Modal.setAppElement('#root');
const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

class MyModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            content: ""
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        setOpen(this.open);
        setClose(this.close);
    }

    open(content) {
        this.setState({
            isOpen: true,
            content: content
        })
    }

    close() {
        this.setState({
            isOpen: false,
            content: ""
        })
    }

    render() {
        return (
            <Modal
                onRequestClose={this.close}
                style={customStyles}
                isOpen={this.state.isOpen}>
                {this.state.content}
            </Modal>
        );
    }
}

export default MyModal;