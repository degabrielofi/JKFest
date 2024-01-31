import React, { useEffect, useState } from "react";
import Header from "components/Header";
import { Container, Presentation, Portfolio } from "./style";
import Carousel from "components/Carousel";
import Footer from "components/Footer";
import IconWhatsApp from "components/IconWhatsApp";
import Photo1 from "assets/images/photo1.png";

const Home = () => {
  return (
    <>
      <Container id="Home">
        <Header />
        <Carousel />
        <Presentation>
          <main className="content">
            <h1>Nós fazemos toda a decoração do seu jeito!</h1>
            <div className="texts">
              <p>
                Realize toda sua festa com a JKFest. <br />
                Somos uma empresa localizado na cidade do Crato - CE, que
                proporciona todo um serviço completo de decoração de festas e
                tornamos sua decoração um grande sucesso!
              </p>
            </div>
            <a href="/portfolio">
              Conheça ainda mais o nosso trabalho{" "}
              <i className="fas fa-arrow-right"></i>
            </a>
          </main>
        </Presentation>
        <Portfolio>
          <h1 className="title">Veja algumas de nossas decorações</h1>
          <section className="images">
            <img src={Photo1} alt="" className="photo left" />
            <img src={Photo1} alt="" className="photo right" />
            <img src={Photo1} alt="" className="photo left" />
            <img src={Photo1} alt="" className="photo right" />
          </section>
        </Portfolio>
      </Container>
      <IconWhatsApp />
    </>
  );
};

export default Home;
