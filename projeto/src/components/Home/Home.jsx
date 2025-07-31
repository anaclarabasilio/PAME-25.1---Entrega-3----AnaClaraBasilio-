import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaSearch, FaHome, FaStar, FaEnvelope, FaCog, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1casa1 from '../../assets/img1casa1.png'
import "./Home.css";

function Home() {
  const [favoritos, setFavoritos] = useState([]);
  const [termoBusca, setTermoBusca] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);




  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-sidebar" onClick={() => setSidebarOpen(false)}>
          <FaTimes />
        </button>
        
        <div className="sidebar-header">
          <h2>Imobiliária</h2>
        </div>
        
        <nav className="sidebar-menu">
          <Link to="/" className="menu-item">
            <FaHome className="menu-icon" />
            <span>Início</span>
          </Link>
          <Link to="/favoritos" className="menu-item">
            <FaStar className="menu-icon" />
            <span>Favoritos</span>
            <span className="favoritos-count">{favoritos.length}</span>
          </Link>

          <Link to="/configuracoes" className="menu-item">
            <FaCog className="menu-icon" />
            <span>Perfil</span>
          </Link>
        </nav>
      </div>

      {/* Conteúdo Principal */}
      <div className="main-content">
        {/* Botão para abrir sidebar em mobile */}
        <button className="open-sidebar" onClick={() => setSidebarOpen(true)}>
          <FaBars />
        </button>

        {/* Barra de busca */}
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Buscar por nome ou localização..."
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
          />
        </div>

        {/* Listagem de imóveis */}
        <div className="imoveis-list">
            <div className="casas">

              <div className="casa">
                <span className="checkmark">Favoritar<a href="#">⭐</a></span>
                <h1>Casa triplex com 6 suítes</h1>
                <h2>Barra da Tijuca, 25.000</h2>
                <img src={img1casa1} alt="" />
                
              </div>
            </div>
            <div className="casa">
                <span className="checkmark">Favoritar<a href="#">⭐</a></span>
                <h1>Casa com duas suítes</h1>
                <h2>Barra da Tijuca, 5.000</h2>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;