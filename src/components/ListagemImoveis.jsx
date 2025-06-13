"use client";
import React, { useState } from "react";
import CardImovel from "./CardImovel";
import styles from "../Styles/ListagemImoveis.module.css";

// --- Dados Fictícios (Mock) COMPLETOS com 8 imóveis e 5 imagens cada ---
// Um imóvel foi atualizado para o tipo "Loft" para o filtro funcionar
const imoveisMock = [
  {
    id: 1,
    imagens: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop",
    ],
    tag: "Chegou hoje",
    tipo: "Apartamento",
    preco: 450000,
    endereco: "R. Duarte de Azevedo, Santana",
    area: 84,
    quartos: 2,
  },
  {
    id: 2,
    imagens: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=800&auto=format&fit=crop",
    ],
    tag: "Oportunidade",
    tipo: "Casa",
    preco: 890000,
    endereco: "Av. Braz Leme, Casa Verde",
    area: 150,
    quartos: 3,
  },
  {
    id: 3,
    imagens: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop",
    ],
    tag: "Chegou hoje",
    tipo: "Cobertura",
    preco: 1850000,
    endereco: "Av. Professor Ascendino Reis, Vila Clementino",
    area: 210,
    quartos: 4,
  },
  {
    id: 4,
    imagens: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop",
    ],
    tag: null,
    tipo: "Casa de Condomínio",
    preco: 1200000,
    endereco: "Alameda dos Pássaros, Alphaville",
    area: 250,
    quartos: 4,
  },
  {
    id: 5,
    imagens: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop",
    ],
    tag: "Exclusivo",
    tipo: "Apartamento",
    preco: 620000,
    endereco: "Rua Augusta, Consolação",
    area: 95,
    quartos: 3,
  },
  {
    id: 6,
    imagens: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop",
    ],
    tag: null,
    tipo: "Loft", // <-- ATUALIZADO para "Loft"
    preco: 410000,
    endereco: "Rua da Consolação, República",
    area: 75, // Área aumentada para fazer sentido com o filtro "A partir de 70 m²"
    quartos: 1,
  },
  {
    id: 7,
    imagens: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=800&auto=format&fit=crop",
    ],
    tag: "Chegou hoje",
    tipo: "Casa",
    preco: 780000,
    endereco: "Rua das Acácias, Morumbi",
    area: 180,
    quartos: 3,
  },
  {
    id: 8,
    imagens: [
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop",
    ],
    tag: "Oportunidade",
    tipo: "Mansão",
    preco: 2500000,
    endereco: "Av. Vieira Souto, Ipanema",
    area: 300,
    quartos: 4,
  },
];

const filtros = [
  "Novidades",
  "3 Quartos",
  "A partir de 70 m²",
  "Propriedades Real",
  "Preço abaixo do mercado",
];

function ListagemImoveis() {
  const [filtroAtivo, setFiltroAtivo] = useState("Novidades");

  const imoveisFiltrados = imoveisMock.filter((imovel) => {
    switch (filtroAtivo) {
      case "Novidades":
        return imovel.tag === "Chegou hoje";
      case "3 Quartos":
        return imovel.quartos === 3;
      case "A partir de 70 m²":
        return imovel.area >= 70;
      case "Propriedades Loft":
        return imovel.tipo === "Loft";
      case "Preço abaixo do mercado":
        return imovel.tag === "Oportunidade";
      default:
        return true; // Caso padrão, não filtra nada
    }
  });

  return (
    <section className={styles.secaoListagem} id="imoveis">
      <div className={styles.conteudoMaximo}>
        <h2 className={styles.tituloSecao}>Oportunidades para você</h2>

        {/* --- BARRA DE FILTROS --- */}
        <div className={styles.filtroContainer}>
          {filtros.map((filtro) => (
            <button
              key={filtro}
              className={filtro === filtroAtivo ? styles.filtroAtivo : styles.filtro}
              onClick={() => setFiltroAtivo(filtro)}
            >
              {filtro}
            </button>
          ))}
        </div>

        {/* --- GRID DE IMÓVEIS --- */}
        <div className={styles.gridContainer}>
          {imoveisFiltrados.length > 0 ? (
            imoveisFiltrados.map((imovel) => (
              <CardImovel key={imovel.id} imovel={imovel} />
            ))
          ) : (
            <p className={styles.nenhumImovel}>
              Nenhum imóvel encontrado para o filtro selecionado.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default ListagemImoveis;