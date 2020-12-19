import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import MainPage from "./MainPage";
import axios from "axios";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const handleLogout = () => {
    setUser({});
    setUsername("");
    setPassword("");
    localStorage.clear();
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const user = { username, password };
    const response = await axios.post(
      "http://localhost:8080/users",
      user
    );

    setUser(response.data);
    const userId = response.data;
    localStorage.setItem("idUser", JSON.stringify(userId.idUser))
    localStorage.setItem("user", JSON.stringify(response.data));
  };

  function refreshPage(){ 
    window.location.reload(); 
}

  if (user) {
    return (
      <div style={{padding: 10}}>
        Logado com sucesso<br/>
        <button style={{marginRight: 5}} onClick={handleLogout}>Deslogar</button>
        <Link to="/account"><button>Ir para conta</button></Link>
      </div>
    );
  }

  return (
    <div className="global-container">
      <div className="main-container">
        <h1>Logar</h1>
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
              placeholder="Digite sua senha "
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button type="submit">Login</button><br/><br/>
        </form>
          <Link to="/register"><button type="submit">Registrar</button></Link>
        </div>
    </div>
  );
};

export default App;
