"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../Styles/Destaque.module.css";

const imagensImovel = [
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop", // Imagem principal inicial
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2670&auto=format&fit=crop", // Imagem extra 1
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2670&auto=format&fit=crop", // Imagem extra 2
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2670&auto=format&fit=crop", // Imagem extra 3
  "https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=2574&auto=format&fit=crop", // Imagem extra 4
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2670&auto=format&fit=crop", // Imagem extra 5
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2574&auto=format&fit=crop", // Imagem extra 6
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2574&auto=format&fit=crop", // Imagem extra 7
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop", // Imagem extra 8
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop", // Imagem extra 9
  "https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=2574&auto=format&fit=crop", // Imagem extra 10
];

function DestaqueImovel() {
  // --- Estado ---
  // Usamos o useState para guardar a URL da imagem que está em destaque.
  // Começamos com a primeira imagem da nossa lista.
  const [imagemSelecionada, setImagemSelecionada] = useState(imagensImovel[0]);

  return (
    <section className={styles.secaoDestaque} id="destaque">
      <div className={styles.conteudo}>
        {/* --- Títulos --- */}
        <h1 className={styles.titulo}>Mansão de Luxo com Vista para o Mar</h1>
        <h2 className={styles.subtitulo}>
          Jurerê Internacional, Florianópolis
        </h2>

        {/* --- Imagem Principal com Animação --- */}
        <div className={styles.imagemPrincipalContainer}>
          <AnimatePresence mode="wait">
            <motion.img
              // A 'key' é crucial para o Framer Motion detectar a troca de imagem
              key={imagemSelecionada}
              src={imagemSelecionada}
              alt="Imagem de destaque do imóvel"
              className={styles.imagemPrincipal}
              // Animação de entrada (quando a nova imagem aparece)
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              // Animação de saída (quando a imagem antiga desaparece)
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        {/* --- Carrossel de Imagens Extras --- */}
        <div className={styles.carrosselContainer}>
          <Swiper
            modules={[Navigation]}
            navigation // Habilita as setas de navegação
            loop={true} // Garante que o carrossel seja infinito
            spaceBetween={10} // Espaço entre as imagens
            slidesPerView={5} // Quantidade de slides visíveis
            // Configurações para diferentes tamanhos de tela (responsividade)
            breakpoints={{
              320: { slidesPerView: 3, spaceBetween: 10 },
              768: { slidesPerView: 4, spaceBetween: 15 },
              1024: { slidesPerView: 5, spaceBetween: 15 },
            }}
            className={styles.meuSwiper}
          >
            {imagensImovel.slice(1).map((url, index) => (
              <SwiperSlide
                key={index}
                className={styles.slide}
                // Ao clicar, atualizamos a imagem em destaque
                onClick={() => setImagemSelecionada(url)}
              >
                <img
                  src={url}
                  alt={`Imagem ${index + 1} do imóvel`}
                  className={styles.imagemSlide}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default DestaqueImovel;
