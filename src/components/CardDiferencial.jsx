import React from 'react';
import styles from '../Styles/CardDiferencial.module.css';

// O componente recebe os dados via props desestruturadas
function CardDiferencial({ imagem, titulo, descricao }) {
  return (
    <div className={styles.card}>
      <div className={styles.imagemContainer}>
        <img src={imagem} alt={titulo} className={styles.imagem} />
      </div>
      <div className={styles.conteudo}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <p className={styles.descricao}>{descricao}</p>
      </div>
    </div>
  );
}

export default CardDiferencial;