import React, { useEffect, useState } from "react";
import { HeaderContainer } from "./style";
import Icon from "assets/icons/Icon.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [classOn, setClassOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <section className="headerContainer">
        <header>
          <div className="icons">
            <a
              target="--blank"
              href="https://api.whatsapp.com/send?phone=558899086157&text=Ol%C3%A1,%20entrei%20em%20contato%20pelo%20site,%20gostaria%20de%20um%20or%C3%A7amento!"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a target="--blank" href="https://www.instagram.com/jk.fest">
              <i className="fab fa-instagram"></i>
            </a>
            <a
              target="--blank"
              href="https://www.facebook.com/profile.php?id=100006570196785"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
          <div className="logo">
            <a href="/">
              <img src={Icon} alt="icon" />
            </a>
          </div>

          <div className="links">
            <input type="checkbox" id="checkbox" />
            <label
              onClick={() => {
                setClassOn(!classOn);
              }}
              for="checkbox"
              className="toggle"
            >
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
          </div>
        </header>

        <nav className={classOn ? "navbar-active" : "navbar"}>
          {window.location.pathname !== "/" ? <a href="/">Home</a> : ""}
          {window.location.pathname !== "/sobre" ? (
            <a href="/sobre">Nossa História</a>
          ) : (
            ""
          )}
          {window.location.pathname !== "/portfolio" ? (
            <a href="/portfolio">Nossa Galeria</a>
          ) : (
            ""
          )}
        </nav>
      </section>
    </HeaderContainer>
  );
};

export default Header;
