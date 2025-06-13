import React from 'react';
// Ícones
import { FaHeart, FaBed } from 'react-icons/fa';
import { BiArea } from "react-icons/bi";

// --- IMPORTAÇÕES DO SWIPER ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from '../Styles/CardImovel.module.css';

function CardImovel({ imovel }) {

  const formatarPreco = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(valor);
  };
  
  return (
    <div className={styles.card}>
      <div className={styles.imagemContainer}>
        {/* --- CARROSSEL DE IMAGENS --- */}
        <Swiper
          // Parar a propagação do clique para não acionar o link do card
          onClick={(e) => e.stopPropagation()}
          className={styles.swiperContainer}
          modules={[Navigation, Pagination]}
          navigation // Habilita setas
          pagination={{ clickable: true }} // Habilita bolinhas de paginação
          loop={true} // Navegação infinita
          grabCursor={true}
        >
          {imovel.imagens.map((url, index) => (
            <SwiperSlide key={index}>
              <img src={url} alt={`Foto ${index + 1} de ${imovel.tipo}`} className={styles.imagem} />
            </SwiperSlide>
          ))}
        </Swiper>
        
        {imovel.tag && <span className={styles.tag}>{imovel.tag}</span>}
        <button className={styles.botaoFavorito}>
          <FaHeart />
        </button>
      </div>

      <div className={styles.infoContainer}>
        <p className={styles.tipo}>{imovel.tipo}</p>
        <h3 className={styles.preco}>{formatarPreco(imovel.preco)}</h3>
        <p className={styles.endereco}>{imovel.endereco}</p>

        <div className={styles.statsContainer}>
          <span><BiArea /> {imovel.area}m²</span>
          <span><FaBed /> {imovel.quartos}</span>
        </div>

        <button className={styles.botaoContato}>Ver contato</button>
      </div>
    </div>
  );
}

export default CardImovel;