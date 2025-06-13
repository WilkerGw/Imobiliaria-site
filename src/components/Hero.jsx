"use client";
import React, { useState, useEffect, useRef } from "react"; // Adicionamos o 'useRef'
import styles from "../Styles/Hero.module.css";
import { FaHouseUser, FaDoorOpen } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Hero = () => {
  const [action, setAction] = useState("comprar");
  const [searchValue, setSearchValue] = useState("");
  const [currentPlaceholder, setCurrentPlaceholder] = useState("Busque por bairro...");
  
  // Estado para controlar a visibilidade e aplicar a animação
  const [isVisible, setIsVisible] = useState(false);

  // 'useRef' para obter a referência do elemento no DOM
  const heroRef = useRef(null);

  const palavrasPlaceholder = [
    "Busque por bairro...",
    "Busque pela rua...",
    "Busque pelo condomínio...",
  ];

  useEffect(() => {
    let indiceAtual = 0;
    const intervalId = setInterval(() => {
      indiceAtual = (indiceAtual + 1) % palavrasPlaceholder.length;
      setCurrentPlaceholder(palavrasPlaceholder[indiceAtual]);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  // Novo useEffect para o Intersection Observer
  useEffect(() => {
    const heroElement = heroRef.current; // O elemento da seção hero

    // O observer é quem vai "vigiar" o nosso elemento
    const observer = new IntersectionObserver(
      (entries) => {
        // 'entries' é um array com os elementos observados
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Elemento está visível, então ativamos a animação
          observer.unobserve(heroElement); // Para a observação após a primeira vez
        }
      },
      {
        threshold: 0.1, // A animação começa quando 10% do elemento estiver visível
      }
    );

    if (heroElement) {
      observer.observe(heroElement); // Inicia a observação
    }

    // Função de limpeza para quando o componente for desmontado
    return () => {
      if (heroElement) {
        observer.unobserve(heroElement);
      }
    };
  }, []); // Array de dependências vazio, executa apenas uma vez

  return (
    // Adicionamos a ref e a classe de animação condicional
    <section
      ref={heroRef}
      className={`${styles.hero} ${isVisible ? styles.visible : ""}`}
      id="hero"
    >
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContainer}>
        <div className={styles.logoPrincipal}>
          <img
            src="../images/logoImg.png"
            alt="Logo da imobiliária"
            className={styles.logo}
          />
        </div>

        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>O seu novo lar está aqui.</h1>
          <p className={styles.subtitle}>
            Facilidade e segurança para quem quer comprar, vender ou alugar.
          </p>

          <div className={styles.searchBox}>
            <div className={styles.actionButtons}>
              <button
                className={`${styles.actionButton} ${
                  action === "comprar" ? styles.active : ""
                }`}
                onClick={() => setAction("comprar")}
              >
                <FaDoorOpen /> Comprar
              </button>
              <button
                className={`${styles.actionButton} ${
                  action === "alugar" ? styles.active : ""
                }`}
                onClick={() => setAction("alugar")}
              >
                <FaHouseUser /> Alugar
              </button>
            </div>

            <div className={styles.searchInputContainer}>
              <input
                type="text"
                placeholder={currentPlaceholder}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className={styles.searchInput}
                aria-label="Campo de busca de imóveis"
              />
              <button
                className={styles.searchButton}
                aria-label="Buscar imóveis"
              >
                <IoSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;