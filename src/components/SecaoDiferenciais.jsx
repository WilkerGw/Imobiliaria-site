import React from 'react';
import CardDiferencial from './CardDiferencial';
import styles from '../Styles/SecaoDiferenciais.module.css';

// Dados para os 4 cards, baseados na sua imagem
const diferenciais = [
  {
    id: 1,
    imagem: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop',
    titulo: 'Diversão sem sair de casa',
    descricao: 'Varandona gourmet e cozinha ampla para reunir a galera.',
  },
  {
    id: 2,
    imagem: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    titulo: 'Condomínio completo',
    descricao: 'Lazer com piscina, churrasqueira, academia e muito mais.',
  },
  {
    id: 3,
    imagem: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop',
    titulo: 'Visita virtual',
    descricao: 'Faça o tour online e conheça nossos apartamentos de um jeito prático e rápido.',
  },
  {
    id: 4,
    imagem: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    titulo: 'Academia no prédio',
    descricao: 'Para você que gosta da praticidade de se exercitar sem sair de casa.',
  },
];

function SecaoDiferenciais() {
  return (
    <section className={styles.secao} id='blog'>
      <h2 className={styles.tituloSecao}>Imóveis selecionados por nós</h2>
      <div className={styles.gridContainer}>
        {diferenciais.map(item => (
          <CardDiferencial 
            key={item.id}
            imagem={item.imagem}
            titulo={item.titulo}
            descricao={item.descricao}
          />
        ))}
      </div>
    </section>
  );
}

export default SecaoDiferenciais;