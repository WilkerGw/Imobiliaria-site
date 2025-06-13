import React from 'react';
// Importando ícones para usar nas informações de contato
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import styles from '../Styles/SecaoContato.module.css';

function SecaoContato() {
  return (
    <section className={styles.secao} id="contato" >
      <div className={styles.container}>
        <h2 className={styles.tituloSecao}>Fale Conosco</h2>
        <p className={styles.subtituloSecao}>
          Tem alguma dúvida ou quer agendar uma visita? Preencha o formulário abaixo ou utilize um de nossos canais de atendimento.
        </p>

        <div className={styles.layoutContainer}>
          {/* --- Coluna da Esquerda: Informações e Formulário --- */}
          <div className={styles.colunaFormulario}>
            <div className={styles.infoContato}>
              <h3>Nossas Informações</h3>
              <ul>
                <li><FaMapMarkerAlt /> <span>Av. Paulista, 1000 - Bela Vista, São Paulo - SP</span></li>
                <li><FaPhone /> <span>(11) 99999-8888</span></li>
                <li><FaEnvelope /> <span>contato@suaimobiliaria.com.br</span></li>
              </ul>
            </div>

            <form className={styles.formulario}>
              <div className={styles.campoForm}>
                <label htmlFor="nome">Seu Nome</label>
                <input type="text" id="nome" name="nome" required />
              </div>
              <div className={styles.campoForm}>
                <label htmlFor="email">Seu E-mail</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.campoForm}>
                <label htmlFor="mensagem">Sua Mensagem</label>
                <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
              </div>
              <button type="submit" className={styles.botaoEnviar}>Enviar Mensagem</button>
            </form>
          </div>

          {/* --- Coluna da Direita: Mapa --- */}
          <div className={styles.colunaMapa}>
            {/* !!! ATENÇÃO !!!
              COLE AQUI O CÓDIGO DO IFRAME QUE VOCÊ COPIOU DO GOOGLE MAPS
              O código abaixo é apenas um exemplo.
            */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.145944936353!2d-46.656571184428!3d-23.56309936754407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5994f2e15a2f%3A0x6b58641a68e5d345!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1686603004812!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da nossa imobiliária"
              className={styles.mapa}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecaoContato;