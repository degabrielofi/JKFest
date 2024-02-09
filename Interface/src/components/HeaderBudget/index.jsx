import React, { useEffect, useState } from "react";
import { HeaderContainer } from "./style";
import Icon from "assets/icons/Icon.png";

const HeaderBudget = () => {
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
          {window.location.pathname !== "/registro" ? (
            <a href="/registro">Registrar Itens</a>
          ) : (
            ""
          )}
          {window.location.pathname !== "/orcamento" ? (
            <a href="/orcamento">Orçamento JKFest</a>
          ) : (
            ""
          )}
        </nav>
      </section>
    </HeaderContainer>
  );
};

export default HeaderBudget;
