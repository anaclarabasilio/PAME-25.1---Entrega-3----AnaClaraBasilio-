import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/LOgin';
import Home from './components/Home/Home';
import Cadastro from './components/Cadastro/Cadastro';

function App(){

  return(
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          {/* página incial sendo a de login*/} 
          <Route path='/home' element={<Home />} />
          <Route path='/cadastro' element={<Cadastro/>}/>

        </Routes>
      </Router>
     </div>
  );
}

export default App;