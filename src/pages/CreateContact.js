import React, { useState  } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import './CreateContact.scss';

export default function CreateContact() {
    const [name, setName] = useState("");
    const [telephone, setTelephone] = useState("");
    const [telephoneType, setTelephoneType] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        const id = localStorage.getItem("idUser");
        const contact = { name, id };
        const telephonePost = { telephone };
        const telephoneTypePost = { telephoneType };
        const emailPost = { email };
        axios.post(
            "http://localhost:8080/contacts",
            contact
        );
        
        axios.post(
            "http://localhost:8080/telephones",
            telephonePost
        );
        
        axios.post(
            "http://localhost:8080/telephonetypes",
            telephoneTypePost
        );
        
        axios.post(
            "http://localhost:8080/emails",
            emailPost
        );
      };

    return (
        <div className="global-container">
            <div className="main-container">
                <h1>Criar contato <Link to="/account"><button>Voltar</button></Link>
                </h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nome">Nome</label>
                    <input 
                        type="text" 
                        name="nome_contato" 
                        value={name}
                        onChange={({ target }) => setName(target.value)}/>
                    <label htmlFor="telefone">Telefone</label>
                    <input 
                        type="text" 
                        name="telefone_contato" 
                        value={telephone}
                        onChange={({ target }) => setTelephone(target.value)}/>
                    <label htmlFor="telefone_tipo">Tipo de telefone</label>
                    <input 
                        type="text" 
                        name="telefone_tipo_contato" 
                        value={telephoneType}
                        onChange={({ target }) => setTelephoneType(target.value)}/>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        name="email_contato" 
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}/>
                    <button type="submit">Criar</button>
                </form>
            </div>
        </div>
    );
}