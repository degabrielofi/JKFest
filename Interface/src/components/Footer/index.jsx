import React from "react";
import { Container, Scroll } from "./style.jsx";
import { FiArrowUpCircle } from "react-icons/fi";
import Icon from "assets/icons/Icon_circle.png";
import IconDEGabrielDEV from "assets/icons/DeGabrielDEV.png";

const Footer = () => {
  let atualDate = new Date().getFullYear();

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <footer>
        <section className="container">
          <div className="content">
            <section className="links">
              <div className="logo">
                <img src={Icon} alt="" />
              </div>

              <div className="contacts">
                <nav>
                  <ul>
                    <li>
                      <span>Fale Conosco:</span>
                      <a
                        href="https://api.whatsapp.com/send?phone=558899086157&text=Ol%C3%A1,%20entrei%20em%20contato%20pelo%20site,%20gostaria%20de%20um%20or%C3%A7amento!"
                        target="--blank"
                      >
                        (88) 99908-6157
                      </a>
                    </li>
                    <li>
                      <span>Localização:</span>
                      <a
                        href="https://maps.app.goo.gl/vmiwpv7Eh1c8Xigx5"
                        target="--blank"
                      >
                        Crato - CE
                      </a>
                    </li>
                    <li>
                      <span>Páginas:</span>
                      <a href="/">Home</a>
                      <a href="/sobre">Nossa História</a>
                      <a href="/galeria">Nossa Galeria</a>
                    </li>
                    <li>
                      <span>Redes Sociais:</span>
                      <a href="/">Whatsapp</a>
                      <a href="/sobre">Instagram</a>
                      <a href="/galeria">Facebook</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </section>

            <section className="row">
              <div className="copy">
                <h4>Copyright © {atualDate} - @jk.fest</h4>
              </div>
              <div className="degabrieldev">
                <a href="https://degabrielofi.vercel.app" target="--blank">
                  <img src={IconDEGabrielDEV} alt="DEGabrielDEV" />
                </a>
              </div>
            </section>

            <div></div>

            <Scroll>
              <div className="top-to-btm">
                <FiArrowUpCircle
                  className="icon-position icon-style"
                  onClick={goToTop}
                />
              </div>
            </Scroll>
          </div>
        </section>
      </footer>
    </Container>
  );
};

export default Footer;
