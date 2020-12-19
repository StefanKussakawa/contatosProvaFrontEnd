import axios from 'axios';
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './MainPage.scss';

export default class MainPage extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            contact: [],
            emails: [],
            telephones: [],
        };
    }


    componentDidMount() {
        const id = localStorage.getItem("idUser");
        axios.get("http://localhost:8080/contacts/user/" + id)
        .then((res) => {
            console.log(res);
            this.setState({contact: res.data});
        });
        axios.get("http://localhost:8080/emails/contact/")
        .then((res) => {
            console.log(res);
            this.setState({emails: res.data});
        });
        axios.get("http://localhost:8080/telephones/contact/")
        .then((res) => {
            console.log(res);
            this.setState({telephones: res.data});
        });
    }

    render(){
        return (    
            <div className="global-container">
                <div className="main-container">
                    <h1>email@gmail.com <Link to="/add"><button>Criar novo contato  </button></Link></h1>
                        {this.state.contact.map((contact) => (
                        <table>
                            <tr key={contact.idContact}>{contact.name}</tr>
                                {this.state.emails.map((emails) => (
                            <tr>{emails.email}</tr>
                                ))}
                                {this.state.telephones.map((telephones) => (
                            <tr>{telephones.telephones}</tr>
                                ))}
                        </table>
                        ))}   
                </div>
            </div>
        )
    }
}
