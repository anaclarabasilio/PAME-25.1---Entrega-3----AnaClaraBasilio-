import React from 'react';
import { Link } from 'react-router-dom';
import './Favortitos.css'; // Arquivo de estilos específico

function Favoritos({ favoritos, setFavoritos }) {
  // Lista mockada de imóveis (substitua pela sua fonte de dados real)
  const todosImoveis = [
    {
      id: 1,
      titulo: "Casa triplex com 6 suítes",
      local: "Barra da Tijuca",
      preco: "R$35.000",
      imagem: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: 2,
      titulo: "Casa 2 quartos",
      local: "Barra da Tijuca",
      preco: "R$5.000",
      imagem: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    // Adicione mais imóveis conforme necessário
  ];

  // Filtra apenas os imóveis favoritados
  const imoveisFavoritos = todosImoveis.filter(imovel => 
    favoritos.includes(imovel.id)
  );

  const toggleFavorito = (id) => {
    setFavoritos(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="favoritos-container">
      <h1>Meus Favoritos</h1>
      
      {imoveisFavoritos.length === 0 ? (
        <div className="sem-favoritos">
          <p>Você ainda não tem imóveis favoritos</p>
          <Link to="/home" className="botao-primario">
            Explorar imóveis
          </Link>
        </div>
      ) : (
        <div className="lista-favoritos">
          {imoveisFavoritos.map(imovel => (
            <div key={imovel.id} className="card-favorito">
              <img 
                src={imovel.imagem} 
                alt={imovel.titulo} 
                className="imagem-favorito"
              />
              <div className="info-favorito">
                <h2>{imovel.titulo}</h2>
                <p>{imovel.local}</p>
                <p className="preco">{imovel.preco}</p>
                <div className="acoes-favorito">
                  <button 
                    onClick={() => toggleFavorito(imovel.id)}
                    className="botao-remover"
                  >
                    Remover dos favoritos
                  </button>
                  <Link 
                    to={`/detalhes/${imovel.id}`} 
                    className="botao-detalhes"
                  >
                    Ver detalhes
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favoritos;