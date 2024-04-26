import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";

import "./Login.css";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //func para tratar o envio do form
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Envio");
        alert("Enviando os dados: " + username + " / " + password);
    };

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Access The System</h1>
            <div className="input-field">
            <input type="email" placeholder='E-mail' required onChange={(e) => setUsername(e.target.value)}/>
            <FaUser className="icon" />
            </div>
            <div className="input-field">
            <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
            <FaLock className="icon" />
            
            </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox" />
                    Remember about me
                </label>
                <a href="#">Forgot your password?</a>
            </div>
            <button>Sign in</button>

            <div className="signup-link">
                <p>Nao tem uma conta? <a href="#">Registre-se</a></p>
            </div>
        </form>
    </div>
  );
};

export default Login
