import React from 'react';
import { Link } from 'react-router-dom';
import './Casa2.css';

// Importe todas as fotos da casa 2
import foto1 from '../../assets/img1casa1.png';
import foto2 from '../../assets/img2casa1.png';
import foto3 from '../../assets/img3casa1.png';
import foto4 from '../../assets/img4casa1.png';
import foto5 from '../../assets/img5casa1.png';
import foto6 from '../../assets/img6casa1.png';


function Casa2() {
  const fotos = [foto1, foto2, foto3, foto4, foto5, foto6]; // Array com todas as fotos

  return (
    <div className="detalhes-container">
      <h1>Casa com Duas Suítes</h1>
      <h2>Barra da Tijuca, Rio de Janeiro - R$5.000/mês</h2>
      
      {/* Grade de fotos */}
      <div className="galeria-fotos">
        {fotos.map((foto, index) => (
          <div key={index} className="foto-item">
            <img 
              src={foto} 
              alt={`Casa com duas suítes - Foto ${index + 1}`} 
              className="foto-imovel"
            />
          </div>
        ))}
      </div>
      
      {/* Informações detalhadas */}
      <div className="informacoes-imovel">
        <div className="detalhes-coluna">
          <h3>Descrição Completa</h3>
          <p>
            Charmosa casa com 2 suítes, 120m² de área útil, localizada a apenas 300m da praia.
            Possui área de lazer completa com churrasqueira, jardim bem cuidado e varanda gourmet.
            Imóvel bem conservado, com acabamentos de qualidade e ótima iluminação natural.
          </p>
          
          <h3>Detalhes Técnicos</h3>
          <ul className="detalhes-lista">
            <li><strong>Quartos:</strong> 2 suítes</li>
            <li><strong>Banheiros:</strong> 2 (suítes) + 1 social</li>
            <li><strong>Área construída:</strong> 120m²</li>
            <li><strong>Vagas:</strong> 2 cobertas</li>
            <li><strong>Disponibilidade:</strong> Imediata</li>
            <li><strong>Condomínio:</strong> R$ 800/mês</li>
          </ul>
        </div>
        
        <div className="detalhes-coluna">
          <h3>Localização</h3>
          <div className="mapa-container">
            <iframe
              title="Localização da Casa com Duas Suítes"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.954274665123!2d-43.36592068443382!3d-22.98391814636529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2c2293fa63%3A0x539cb07a71951e1!2sBarra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1681234567890!5m2!1spt-BR!2sbr"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <h3>Diferenciais</h3>
          <ul className="diferenciais-lista">
            <li>Varanda gourmet com churrasqueira</li>
            <li>Jardim privativo</li>
            <li>Cozinha planejada</li>
            <li>Portaria 24h</li>
          </ul>
        </div>
      </div>
      
      <div className="acoes-detalhes">
        <button className="solicitar-btn">
          Solicitar Aluguel
        </button>
        <Link to="/home" className="voltar-btn">
          Voltar para lista
        </Link>
      </div>
    </div>
  );
}

export default Casa2;