import { redirect, useNavigate } from "react-router-dom";
import "./index.css";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  // Crie um state para username iniciando como string vazia.
 const [username, setUsername] = useState(" ");
  // Crie um state para password iniciando como string vazia.
  const [password, setPassword] = useState(" ");
  // Crie um state para message iniciando como string vazia.
  const [message, setMessage] = useState(" ");

  const handleLogin = async () => {
    await fetch("/users.json")
      .then((response) => response.json())
      .then((data) => {
        const users = data.users;
        const user = users.find(
          (u) => u.username === username && u.password === password
        );
        if (user) {
          localStorage.setItem("authenticated", "true");
          navigate("/dashboard");
        } else {
          setMessage("Login falhou. Verifique suas credenciais.");
        }
      });
  };

  return (
    <div className="login-container">
      <img src="/images/logo.png" style={{ width: 50 }} />
      <h2 className="login-title">Login</h2>
      <input type="text" placeholder="Digite seu login" value={username} onChange={(e)=> setUsername(e.target.value)} />
      <input type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="login-button" onClick={handleLogin} />
      <p>{message}</p>
    </div>
  )
};

export default Login;

  /*
      Crie uma div pai com className="login-container".ok
      Crie <img src="/images/logo.png" style={{ width: 50 }} /> ok
      Crie um h2 com className="login-title". ok
      Crie um input do tipo text com placeholder e value={username} e  onChange={(e) => setUsername(e.target.value)}. ok
      Crie um input do tipo password com placeholder e  value={password} e  onChange={(e) => setPassword(e.target.value)}. ok
      Crie um buttom com className="login-button" e onClick direcionando para a função handleLogin. ok
      Crie um p recebendo o valor de message.ok
    */
