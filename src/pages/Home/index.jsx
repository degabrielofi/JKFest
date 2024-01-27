import React from "react";

const Home = () => {
  return (
    <>
      <header>
        <h1>JKfest - Decoração de Festas</h1>
      </header>

      <nav>
        <a href="#">Início</a>
        <a href="#">Serviços</a>
        <a href="#">Portfólio</a>
        <a href="#">Contato</a>
      </nav>

      <section class="welcome-section">
        <h2>Bem-vindo à JKfest</h2>
        <p>
          Transformando suas festas em momentos inesquecíveis com decorações
          encantadoras!
        </p>
        <img src="decoracao-festa.jpg" alt="Decoração de festa" />
      </section>

      <footer>
        <p>&copy; 2024 JKfest - Decoração de Festas</p>
      </footer>
    </>
  );
};

export default Home;
