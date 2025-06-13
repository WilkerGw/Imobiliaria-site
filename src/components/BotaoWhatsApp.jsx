import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Usando o ícone que já temos
import styles from '../Styles/BotaoWhatsApp.module.css';

function BotaoWhatsApp() {
  // --- INFORMAÇÕES CONFIGURÁVEIS ---
  const numeroTelefone = '5511999998888'; // Coloque seu número completo aqui
  const mensagemPadrao = 'Olá! Tenho interesse em um imóvel e gostaria de mais informações.';

  // Codifica a mensagem para ser usada na URL
  const linkWhatsApp = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagemPadrao)}`;

  return (
    <a
      href={linkWhatsApp}
      className={styles.botaoFlutuante}
      target="_blank"
      rel="noopener noreferrer" // Boas práticas de segurança para links externos
      aria-label="Entrar em contato pelo WhatsApp"
    >
      <FaWhatsapp className={styles.icone} />
    </a>
  );
}

export default BotaoWhatsApp;