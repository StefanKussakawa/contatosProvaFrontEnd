import React, { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const user = { username, password };
    axios.post(
      "http://localhost:8080/users",
      user
    )
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  };

  return (
    <div className="global-container">
      <div className="main-container">
        <h1>Criar usuário <Link to="/"><button>Voltar</button></Link></h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Email: </label>
          <input
            type="text"
            value={username}
            placeholder="Digite seu email"
            onChange={({ target }) => setUsername(target.value)}
          />
          <div>
            <label htmlFor="password">Senha: </label>
            <input
              type="password"
              value={password}
              placeholder="Digite sua senha"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default App;
