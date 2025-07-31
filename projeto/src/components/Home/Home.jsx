import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Importe suas imagens
import img1casa2 from '../../assets/img1casa1.png';
import img2casa2 from '../../assets/img2casa1.png';
import img1casa1 from '../../assets/img1casa2.png';
import img2casa1 from '../../assets/img2casa2.png';

function Home() {
  // Estado para sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Estados para os carrosséis
  const [currentImgCasa1, setCurrentImgCasa1] = useState(0);
  const [currentImgCasa2, setCurrentImgCasa2] = useState(0);
  const [favoritos, setFavoritos] = useState([]);

  // Dados dos imóveis
  const imoveis = [
    {
      id: 1,
      titulo: "Casa triplex com 6 suítes",
      local: "Barra da Tijuca",
      preco: "R$25.000",
      imagens: [img1casa1, img2casa1],
      descricao: "Casa ótima para acomodar toda a família"
    },
    {
      id: 2,
      titulo: "Casa com duas suítes",
      local: "Barra da Tijuca",
      preco: "R$5.000",
      imagens: [img1casa2, img2casa2],
      descricao: "Casa muito bem conservada com vista para a praia"
    }
  ];

  // Funções do carrossel
  const nextImage = (casaId) => {
    const imovel = imoveis.find(i => i.id === casaId);
    if (casaId === 1) {
      setCurrentImgCasa1((prev) => (prev + 1) % imovel.imagens.length);
    } else {
      setCurrentImgCasa2((prev) => (prev + 1) % imovel.imagens.length);
    }
  };

  const prevImage = (casaId) => {
    const imovel = imoveis.find(i => i.id === casaId);
    const length = imovel.imagens.length;
    if (casaId === 1) {
      setCurrentImgCasa1((prev) => (prev - 1 + length) % length);
    } else {
      setCurrentImgCasa2((prev) => (prev - 1 + length) % length);
    }
  };

  const toggleFavorito = (id) => {
    setFavoritos(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button className="close-sidebar" onClick={() => setSidebarOpen(false)}>
          &times;
        </button>
        
        <div className="sidebar-header">
          <h2>Imobiliária</h2>
        </div>
        
        <nav className="sidebar-menu">
          <Link to="/" className="menu-item" onClick={() => setSidebarOpen(false)}>
            <span className="menu-icon">🏠</span>
            <span>Página Inicial</span>
          </Link>
          
          <Link to="/favoritos" className="menu-item" onClick={() => setSidebarOpen(false)}>
            <span className="menu-icon">⭐</span>
            <span>Favoritos</span>
            {favoritos.length > 0 && (
              <span className="favoritos-count">{favoritos.length}</span>
            )}
          </Link>
          
          <Link to="/perfil" className="menu-item" onClick={() => setSidebarOpen(false)}>
            <span className="menu-icon">👤</span>
            <span>Perfil</span>
          </Link>
        </nav>
      </div>

      {/* Conteúdo Principal */}
      <div className="main-content">
        <button className="open-sidebar" onClick={() => setSidebarOpen(true)}>
          ☰ Menu
        </button>

        <div className="casas-container">
          {/* Casa 1 */}
          <div className="casa">
            <div className="carrossel-container">
              <img 
                src={imoveis[0].imagens[currentImgCasa1]} 
                alt={imoveis[0].titulo}
                className="casa-imagem"
              />
              
              <button 
                className="carrossel-seta esquerda"
                onClick={() => prevImage(1)}
              >
                &lt;
              </button>
              
              <button 
                className="carrossel-seta direita"
                onClick={() => nextImage(1)}
              >
                &gt;
              </button>
              
              <div className="carrossel-indicadores">
                {imoveis[0].imagens.map((_, index) => (
                  <span
                    key={`casa1-${index}`}
                    className={`indicador ${currentImgCasa1 === index ? 'ativo' : ''}`}
                    onClick={() => setCurrentImgCasa1(index)}
                  />
                ))}
              </div>
            </div>
            
            <div className="casa-info">
              <h1>{imoveis[0].titulo}</h1>
              <h2>{imoveis[0].local}, {imoveis[0].preco}</h2>
              <p>{imoveis[0].descricao}</p>
              
              <div className="casa-acoes">
                <button
                  onClick={() => toggleFavorito(imoveis[0].id)}
                  className={`favorito-btn ${favoritos.includes(imoveis[0].id) ? 'ativo' : ''}`}
                >
                  {favoritos.includes(imoveis[0].id) ? '❤️ Remover' : '♡ Favoritar'}
                </button>
                <Link to="/casa1" className="ver-mais-btn">
                 Ver mais
                </Link>
              </div>
            </div>
          </div>

          {/* Casa 2 */}
          <div className="casa">
            <div className="carrossel-container">
              <img 
                src={imoveis[1].imagens[currentImgCasa2]} 
                alt={imoveis[1].titulo}
                className="casa-imagem"
              />
              
              <button 
                className="carrossel-seta esquerda"
                onClick={() => prevImage(2)}
              >
                &lt;
              </button>
              
              <button 
                className="carrossel-seta direita"
                onClick={() => nextImage(2)}
              >
                &gt;
              </button>
              
              <div className="carrossel-indicadores">
                {imoveis[1].imagens.map((_, index) => (
                  <span
                    key={`casa2-${index}`}
                    className={`indicador ${currentImgCasa2 === index ? 'ativo' : ''}`}
                    onClick={() => setCurrentImgCasa2(index)}
                  />
                ))}
              </div>
            </div>
            
            <div className="casa-info">
              <h1>{imoveis[1].titulo}</h1>
              <h2>{imoveis[1].local}, {imoveis[1].preco}</h2>
              <p>{imoveis[1].descricao}</p>
              
              <div className="casa-acoes">
                <button
                  onClick={() => toggleFavorito(imoveis[1].id)}
                  className={`favorito-btn ${favoritos.includes(imoveis[1].id) ? 'ativo' : ''}`}
                >
                  {favoritos.includes(imoveis[1].id) ? '❤️ Remover' : '♡ Favoritar'}
                </button>
                <Link to="/casa2" className="ver-mais-btn">
                    Ver mais
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;