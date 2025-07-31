import { FaUser, FaLock } from "react-icons/fa";
import { useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import './Login.css';
function Login(){

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
        <h1>Acesse o sistema</h1>

        <div className="input-field">
            <input type="email" placeholder='E-mail' onChange={(e) => setUsername(e.target.value)}/>
            <FaUser className="icon"/>
        </div>
        <div className="input-field">
            <input type="password" placeholder='senha' onChange={(e) => setPassword(e.target.value)}/>
            <FaLock className="icon"/>
        </div>

        <div className="recall-forget">
            <label htmlFor="">
                <input type="checkbox"/>
                Lembrar de mim
            </label>
        </div>
        <button>Entrar</button>
        <div className="signup-link">
            <p>
                <Link to='/cadastro'>Cadastre-se</Link>
            </p>
        </div>
        
      </form>
    </div>
  );
}

export default Login;
