'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../Styles/Header.module.css';

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [dropdownAberto, setDropdownAberto] = useState(null);
  const pathname = usePathname();

  const navLinks = [
    {
      label: 'Comprar',
      href: '/comprar',
      children: [
        { label: 'Apartamentos à venda', href: '/comprar/apartamentos' },
        { label: 'Casas à venda', href: '/comprar/casas' },
        { label: 'Simular financiamento', href: '/financiamento' },
      ],
    },
    {
      label: 'Alugar',
      href: '/alugar',
      children: [
        { label: 'Apartamentos para alugar', href: '/alugar/apartamentos' },
        { label: 'Casas para alugar', href: '/alugar/casas' },
      ],
    },
    { label: 'Vender imóvel', href: '/vender' },
    { label: 'Financiamento', href: '/financiamento' },
    {
      label: 'Real Mais Negócio',
      href: '/mais-negocio',
      children: [
        { label: 'Para imobiliárias', href: '/mais-negocio/imobiliarias' },
        { label: 'Para corretores', href: '/mais-negocio/corretores' },
      ],
    },
  ];

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
    if (menuAberto) {
      setDropdownAberto(null);
    }
  };

  const handleLinkClick = () => {
    if (menuAberto) {
      toggleMenu();
    }
  };

  const handleDropdownToggle = (label) => {
    if (dropdownAberto === label) {
      setDropdownAberto(null);
    } else {
      setDropdownAberto(label);
    }
  };

  useEffect(() => {
    const body = document.body;
    if (menuAberto) {
      body.classList.add('menuOpen');
    } else {
      body.classList.remove('menuOpen');
    }
    return () => {
      body.classList.remove('menuOpen');
    };
  }, [menuAberto]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoLink} onClick={handleLinkClick}>
          <img src="/images/logoImg.png" alt="Logo da imobiliária" className={styles.logo} />
        </Link>

        <nav className={`${styles.nav} ${menuAberto ? styles.navOpen : ''}`}>
          {navLinks.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
            const isDropdownOpen = dropdownAberto === link.label;

            return (
              <div key={link.label} className={styles.navItem}>
                <div
                  className={`${styles.navLinkContainer} ${isActive ? styles.activeLink : ''} ${isDropdownOpen ? styles.dropdownActive : ''}`}
                  onClick={() => link.children && handleDropdownToggle(link.label)}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      if (link.children) e.preventDefault();
                      else handleLinkClick();
                    }}
                    className={styles.navLink}
                  >
                    {link.label}
                    {/* --- ÍCONE SVG ADICIONADO AQUI --- */}
                    {/* Ele só aparece se link.children existir */}
                    {link.children && (
                      <svg
                        className={`${styles.dropdownIcon} ${isDropdownOpen ? styles.iconOpen : ''}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </Link>
                </div>

                {/* Dropdown para Desktop */}
                {link.children && (
                  <div className={styles.dropdownDesktop}>
                    {link.children.map((childLink) => (
                      <Link
                        key={childLink.label}
                        href={childLink.href}
                        className={styles.dropdownLink}
                        onClick={handleLinkClick}
                      >
                        {childLink.label}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Dropdown para Mobile */}
                {link.children && (
                  <div className={`${styles.dropdownMobile} ${isDropdownOpen ? styles.dropdownMobileOpen : ''}`}>
                    {link.children.map((childLink) => (
                      <Link
                        key={childLink.label}
                        href={childLink.href}
                        className={styles.dropdownLinkMobile}
                        onClick={handleLinkClick}
                      >
                        {childLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className={styles.mobileOnlyActions}>
            <Link href="/login" className={styles.loginButton} onClick={handleLinkClick}>
              Entrar
            </Link>
          </div>
        </nav>

        <div className={styles.actionsContainer}>
          <Link href="/login" className={`${styles.loginButton} ${styles.desktopOnly}`}>
            Entrar
          </Link>
          <button className={styles.menuHamburguer} onClick={toggleMenu} aria-label="Abrir menu">
            <div className={`${styles.linha} ${menuAberto ? styles.linha1Aberta : ''}`}></div>
            <div className={`${styles.linha} ${menuAberto ? styles.linha2Aberta : ''}`}></div>
            <div className={`${styles.linha} ${menuAberto ? styles.linha3Aberta : ''}`}></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;