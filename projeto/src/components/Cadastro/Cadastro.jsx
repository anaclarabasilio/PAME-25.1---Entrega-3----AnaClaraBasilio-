import { FaUser, FaLock } from "react-icons/fa";
import { useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import './Cadastro.css';
import React from "react"
function Cadastro(){
   
const [username, setUsername] = useState('');
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault(); // Evita recarregar a página
        navigate('/home'); // Redireciona para a página Home
    };

  return(
    <div className="container">
      <form onSubmit={handleLogin}>
        <h1>Cadastre-se</h1>

        <div className="input-field">
            <input type="email" placeholder='E-mail' onChange={(e) => setUsername(e.target.value)}/>
            <FaUser className="icon"/>
        </div>
        <div className="input-field">
            <input type="password" placeholder='senha' onChange={(e) => setPassword(e.target.value)}/>
            <FaLock className="icon"/>
        </div>

        <button><Link to='/'><div className="cadast">Cadastre-se</div></Link></button>
 
        
      </form>
    </div>
  );
    
}

export default Cadastro