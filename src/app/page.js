import Header from "@/components/Header";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import DestaqueImovel from "@/components/Destaque";
import ListagemImoveis from "@/components/ListagemImoveis";
import SecaoDiferenciais from "@/components/SecaoDiferenciais";
import SecaoContato from "@/components/SecaoContato";
import Footer from "@/components/Footer";
import BotaoWhatsApp from "@/components/BotaoWhatsApp";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <Header />
      </header>
      <main className={styles.main}>
        <Hero />
        <DestaqueImovel />
        <ListagemImoveis />
        <SecaoDiferenciais />
        <SecaoContato />
      </main>
      <footer>
        <Footer />
        <BotaoWhatsApp/>
      </footer>
    </div>
  );
}
