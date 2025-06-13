import React from 'react';
// Importando ícones de redes sociais
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import styles from '../Styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>

          {/* --- Coluna 1: Logo e Sobre --- */}
          <div className={styles.colunaFooter}>
            {/* Você pode usar a tag <Image> do Next.js aqui se preferir */}
            <img src="../images/logoImg.png" alt="Logo da Imobiliária" className={styles.logo} />
            <p className={styles.descricao}>
              A sua imobiliária de confiança, conectando você ao seu imóvel dos sonhos com tecnologia e atendimento personalizado.
            </p>
          </div>

          {/* --- Coluna 2: Links Institucionais --- */}
          <div className={styles.colunaFooter}>
            <h4 className={styles.tituloColuna}>Institucional</h4>
            <ul className={styles.listaLinks}>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Trabalhe Conosco</a></li>
              <li><a href="/#contato">Contato</a></li>
            </ul>
          </div>

          {/* --- Coluna 3: Links de Imóveis --- */}
          <div className={styles.colunaFooter}>
            <h4 className={styles.tituloColuna}>Imóveis</h4>
            <ul className={styles.listaLinks}>
              <li><a href="#">Comprar</a></li>
              <li><a href="#">Alugar</a></li>
              <li><a href="#">Lançamentos</a></li>
              <li><a href="#">Anunciar Imóvel</a></li>
            </ul>
          </div>

          {/* --- Coluna 4: Redes Sociais --- */}
          <div className={styles.colunaFooter}>
            <h4 className={styles.tituloColuna}>Siga-nos</h4>
            <div className={styles.redesSociais}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            </div>
          </div>

        </div>

        <div className={styles.footerBottom}>
          <p>© 2025 Sua Imobiliária. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;