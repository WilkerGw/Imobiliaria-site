'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../Styles/Header.module.css';
import { useScrollSpy } from '../hooks/useScrollSpy'; // Ajuste o caminho se necessário

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  // Array para facilitar a manutenção dos links de navegação
  const navLinks = [
    { href: 'hero', label: 'Home' },
    { href: 'destaque', label: 'Destaque' },
    { href: 'imoveis', label: 'Imóveis' },
    { href: 'blog', label: 'Blog' },
    { href: 'contato', label: 'Contato' },
  ];

  // Extrai os IDs das seções para passar ao nosso hook
  const sectionIds = navLinks.map(link => link.href);

  // Nosso hook em ação! Ele retorna o ID da seção visível no momento.
  const activeId = useScrollSpy(sectionIds, {
    rootMargin: '0px 0px -50% 0px' // Considera uma seção "ativa" quando ela ocupa a metade superior da tela
  });

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  // Fecha o menu ao clicar em um link no mobile
  const handleLinkClick = () => {
    if (menuAberto) {
      toggleMenu();
    }
  };
  
  // Adiciona/remove classe no body para travar o scroll quando o menu mobile estiver aberto
  useEffect(() => {
    if (menuAberto) {
      document.body.classList.add(styles.menuOpen);
    } else {
      document.body.classList.remove(styles.menuOpen);
    }
  }, [menuAberto]);


  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" legacyBehavior>
          <a className={styles.logoLink}>
            <img src="../images/logoImg.png" alt="Logo da imobiliária" className={styles.logo} />
          </a>
        </Link>

        {/* Navegação para Desktop e Mobile - Gerada a partir do array */}
        <nav className={`${styles.nav} ${menuAberto ? styles.navOpen : ''}`}>
          {navLinks.map((link) => (
            <Link key={link.href} href={`#${link.href}`} legacyBehavior>
              <a
                className={`${styles.navLink} ${activeId === link.href ? styles.activeLink : ''}`}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            </Link>
          ))}
        </nav>

        {/* Botão Hambúrguer para Mobile */}
        <button className={styles.menuHamburguer} onClick={toggleMenu} aria-label="Abrir menu">
          <div className={`${styles.linha} ${menuAberto ? styles.linha1Aberta : ''}`}></div>
          <div className={`${styles.linha} ${menuAberto ? styles.linha2Aberta : ''}`}></div>
          <div className={`${styles.linha} ${menuAberto ? styles.linha3Aberta : ''}`}></div>
        </button>
      </div>
    </header>
  );
};

export default Header;