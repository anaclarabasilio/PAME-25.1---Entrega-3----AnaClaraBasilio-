import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/LOgin';
import Home from './components/Home/Home';
import Cadastro from './components/Cadastro/Cadastro';
import Casa1 from './components/Casa1/Casa1'
import Casa2 from './components/Casa2/Casa2'


function App(){

  return(
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          {/* página incial sendo a de login*/} 
          <Route path='/home' element={<Home />} />
          <Route path='/cadastro' element={<Cadastro/>}/>

          <Route path="/casa1" element={<Casa1 />} />
          <Route path="/casa2" element={<Casa2 />} />

        </Routes>
      </Router>
     </div>
  );
}

export default App;