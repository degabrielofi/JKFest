import React from "react";
import Header from "components/Header";
import { TitlePage, QuemSomos } from "./style";
import Image from "assets/images/BackgroundAbout.png";
import Footer from "components/Footer";
import JKFestTeam from "assets/images/JKFestTeam.png";

const About = () => {
  return (
    <>
      <Header />
      <TitlePage className="title_page">
        <img className="JKFest" src={Image} alt="" />
        <h1>
          JKFEST
          <div className="detail">
            <i />
          </div>
        </h1>
      </TitlePage>

      <QuemSomos>
        <div className="title">
          <h1>NOSSA HISTÓRIA</h1>
          <br />
          <i></i>
        </div>
        <div className="text">
          <p>
            A JKFest foi criada pelo casal Jobson e Kelma, com o objetivo de
            fazer a decoração de aniversários, casamentos, batizados do jeito
            que o cliente desejava. <br /> <br />
            Deste modo, unindo um time de parceiros incriveis, a JKFest foi
            responsável por produzir as melhores decorações de diversas festas
            pelo Crato - CE, deixando cada detalhe com a cara do cliente.
          </p>
          <img src={JKFestTeam} alt="" />
        </div>
      </QuemSomos>
      <Footer />
    </>
  );
};

export default About;
