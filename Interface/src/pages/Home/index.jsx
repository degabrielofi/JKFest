import React from "react";
import Header from "components/Header";
import { Container, Presentation, Portfolio, LinkInstagram } from "./style";
import Carousel from "components/Carousel";
import Footer from "components/Footer";
import IconWhatsApp from "components/IconWhatsApp";
import DecoraçãoAna from "assets/images/Portfolio/DecoraçãoAna.png";
import DecoraçãoJorge from "assets/images/Portfolio/DecoraçãoJorge.png";
import DecoraçãoOhanna from "assets/images/Portfolio/DecoraçãoOhanna.png";
import DecoraçãoOtto from "assets/images/Portfolio/DecoraçãoOtto.png";
import DecoraçãoTanizaDavid from "assets/images/Portfolio/DecoraçãoTaniza&David.png";
import DecoraçãoIsabelle from "assets/images/Portfolio/DecoraçãoIsabelle.png";
import DecoraçãoValentina from "assets/images/Portfolio/DecoraçãoValentina.png";
import DecoraçãoApolo from "assets/images/Portfolio/DecoraçãoApolo.png";

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
            <a href="/sobre">
              Conheça ainda mais o nosso trabalho{" "}
              <i className="fas fa-arrow-right"></i>
            </a>
          </main>
        </Presentation>
        <Portfolio>
          <h1 className="title">Veja algumas de nossas decorações:</h1>
          <section className="images">
            <div className="photos1">
              <img src={DecoraçãoOtto} alt="" />
              <img src={DecoraçãoTanizaDavid} alt="" />
              <img src={DecoraçãoAna} alt="" />
              <img src={DecoraçãoJorge} alt="" />
            </div>
            <div className="photos2">
              <img src={DecoraçãoOhanna} alt="" />
              <img src={DecoraçãoValentina} alt="" />
              <img src={DecoraçãoIsabelle} alt="" />
              <img src={DecoraçãoApolo} alt="" />
            </div>
          </section>
          <div className="link">
            <a href="/galeria">
              Veja mais decorações <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </Portfolio>
        <LinkInstagram>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#d8096b"
              fill-opacity="1"
              d="M0,64L17.1,90.7C34.3,117,69,171,103,160C137.1,149,171,75,206,53.3C240,32,274,64,309,101.3C342.9,139,377,181,411,181.3C445.7,181,480,139,514,149.3C548.6,160,583,224,617,234.7C651.4,245,686,203,720,192C754.3,181,789,203,823,186.7C857.1,171,891,117,926,128C960,139,994,213,1029,250.7C1062.9,288,1097,288,1131,266.7C1165.7,245,1200,203,1234,202.7C1268.6,203,1303,245,1337,234.7C1371.4,224,1406,160,1423,128L1440,96L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
            ></path>
          </svg>
          <section className="insta">
            <div className="content">
              <h1>Nos siga no Instagram</h1>
              <p>
                Encontre por lá, todas as nossas novidades e últimos trabalhos
                da JKFest!
              </p>
              <a href="https://www.instagram.com/jk.fest" target="--blank">
                <i className="fab fa-instagram"></i>@jk.fest
                <span className="followers">&nbsp; 3.8K </span>
              </a>
            </div>
          </section>
        </LinkInstagram>
      </Container>
      <Footer />
      <IconWhatsApp />
    </>
  );
};

export default Home;
