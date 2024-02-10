import React, { useEffect, useState } from "react";
import Header from "components/Header";
import {
  GalleryContainer,
  LinkInstagram,
  Title,
  WavesAnimation,
} from "./style";
import Footer from "components/Footer";
import Photo1 from "assets/images/Gallery/JKFest1.jpg";
import Photo2 from "assets/images/Gallery/JKFest2.jpg";
import Photo3 from "assets/images/Gallery/JKFest3.jpg";
import Photo4 from "assets/images/Gallery/JKFest4.jpg";
import Photo5 from "assets/images/Gallery/JKFest5.jpg";
import Photo6 from "assets/images/Gallery/JKFest6.jpg";
import Photo7 from "assets/images/Gallery/JKFest7.jpg";
import Photo8 from "assets/images/Gallery/JKFest8.jpg";
import Photo9 from "assets/images/Gallery/JKFest9.jpg";
import Photo10 from "assets/images/Gallery/JKFest10.jpg";
import Photo11 from "assets/images/Gallery/JKFest11.jpg";
import Photo12 from "assets/images/Gallery/JKFest12.jpg";
import Photo13 from "assets/images/Gallery/JKFest13.jpg";
import Photo14 from "assets/images/Gallery/JKFest14.jpg";
import Photo15 from "assets/images/Gallery/JKFest15.jpg";
import Photo16 from "assets/images/Gallery/JKFest16.jpg";
import Photo17 from "assets/images/Gallery/JKFest17.jpg";
import Photo18 from "assets/images/Gallery/JKFest18.jpg";
import Photo19 from "assets/images/Gallery/JKFest19.jpg";
import Photo20 from "assets/images/Gallery/JKFest20.jpg";
import Photo21 from "assets/images/Gallery/JKFest21.jpg";
import Photo22 from "assets/images/Gallery/JKFest22.jpg";
import Photo23 from "assets/images/Gallery/JKFest23.jpg";
import Photo24 from "assets/images/Gallery/JKFest24.jpg";

const images = [
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  Photo5,
  Photo6,
  Photo7,
  Photo8,
  Photo9,
  Photo10,
  Photo11,
  Photo12,
  Photo13,
  Photo14,
  Photo15,
  Photo16,
  Photo17,
  Photo18,
  Photo19,
  Photo20,
  Photo21,
  Photo22,
  Photo23,
  Photo24,
];

const Gallery = () => {
  const [data, setData] = useState({ img: "", i: 0 });
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const viewImage = (img, i) => {
    setData({ img, i });
    setFullscreenImage(img);
  };

  const imgAction = (action) => {
    let i = data.i;
    if (action === "next-img") {
      i = (i + 1) % images.length;
      setData({ img: images[i], i });
    }

    if (action === "previous-img") {
      i = (i - 1 + images.length) % images.length;
      setData({ img: images[i], i });
    }
    if (!action) {
      setData({ img: "", i: 0 });
      setFullscreenImage(null);
    }
  };

  useEffect(() => {
    if (fullscreenImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [fullscreenImage]);
  return (
    <>
      {!fullscreenImage && <Header />}

      {!fullscreenImage && (
        <Title>
          <section className="container">
            <div className="content">
              <h1>Encontre mais decorações abaixo</h1>
              <i className="fa fa-arrow-down"></i>
            </div>
          </section>
        </Title>
      )}
      {!fullscreenImage && (
        <WavesAnimation>
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 490"
            xmlns="http://www.w3.org/2000/svg"
            class="transition duration-300 ease-in-out delay-150"
          >
            <path
              d="M 0,500 L 0,125 C 27.98101934815908,105.93530291957723 55.96203869631816,86.87060583915446 96,78 C 136.03796130368184,69.12939416084554 188.13286456288643,70.45287956295937 226,71 C 263.8671354371136,71.54712043704063 287.50650305213605,71.31787590900811 321,98 C 354.49349694786395,124.68212409099189 397.8411232285695,178.27561680100825 439,168 C 480.1588767714305,157.72438319899175 519.1290040335862,83.57965688695889 551,66 C 582.8709959664138,48.42034311304111 607.6428606370861,87.4057556511562 649,121 C 690.3571393629139,154.5942443488438 748.2995534180694,182.79732050841636 784,183 C 819.7004465819306,183.20267949158364 833.1589256906362,155.40496231517838 868,124 C 902.8410743093638,92.59503768482162 959.0647438193853,57.582830230870044 1007,63 C 1054.9352561806147,68.41716976912996 1094.5820990318223,114.26371676134144 1125,122 C 1155.4179009681777,129.73628323865856 1176.6068600533258,99.36230272376415 1205,95 C 1233.3931399466742,90.63769727623585 1268.9904607548738,112.28707234360198 1320,128 C 1371.0095392451262,143.71292765639802 1437.431296927179,153.489407901828 1460,152 C 1482.568703072821,150.510592098172 1461.2843515364107,137.75529604908598 1440,125 L 1440,500 L 0,500 Z"
              stroke="none"
              stroke-width="0"
              fill="#0a90cd"
              fill-opacity="0.53"
              class="transition-all duration-300 ease-in-out delay-150 path-0"
              transform="rotate(-180 720 250)"
            ></path>
            <path
              d="M 0,500 L 0,291 C 44.89883426486493,296.033213347285 89.79766852972986,301.0664266945701 122,298 C 154.20233147027014,294.9335733054299 173.70816014594547,283.7675065690045 205,287 C 236.29183985405453,290.2324934309955 279.3696908864883,307.8635470294119 318,298 C 356.6303091135117,288.1364529705881 390.81307630810153,250.77830531334791 435,258 C 479.18692369189847,265.2216946866521 533.3780038811054,317.0232317171963 568,314 C 602.6219961188946,310.9767682828037 617.6749081674769,253.12876781786682 651,240 C 684.3250918325231,226.87123218213318 735.9223634489866,258.4616970113363 778,269 C 820.0776365510134,279.5383029886637 852.6356380365766,269.02444413678785 883,267 C 913.3643619634234,264.97555586321215 941.535084404707,271.44052644151213 978,289 C 1014.464915595293,306.55947355848787 1059.2240243445954,335.2134500971639 1100,337 C 1140.7759756554046,338.7865499028361 1177.5688182169126,313.7056731698324 1215,318 C 1252.4311817830874,322.2943268301676 1290.5007027877543,355.9638572235067 1335,338 C 1379.4992972122457,320.0361427764933 1430.4283706320703,250.43889793614093 1449,234 C 1467.5716293679297,217.56110206385907 1453.7858146839649,254.28055103192952 1440,291 L 1440,500 L 0,500 Z"
              stroke="none"
              stroke-width="0"
              fill="#0a90cd"
              fill-opacity="1"
              class="transition-all duration-300 ease-in-out delay-150 path-1"
              transform="rotate(-180 720 250)"
            ></path>
          </svg>
        </WavesAnimation>
      )}

      {data.img && (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,.85)",
            backdropFilter: "blur(10px)",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <button
            onClick={() => imgAction()}
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              cursor: "pointer",
              background: "transparent",
              border: "none",
            }}
          >
            <i
              style={{ color: "#fff", fontSize: "1rem" }}
              className="fa fa-x"
            ></i>
          </button>
          <div style={{ marginRight: "3rem" }}>
            <button
              onClick={() => imgAction("previous-img")}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <i
                style={{ color: "#fff", fontSize: "1rem" }}
                className="fa fa-angle-double-left"
              ></i>
            </button>
          </div>
          <img
            src={data.img}
            alt=""
            style={{ width: "auto", maxWidth: "100%", maxHeight: "95%" }}
            className="GalleryImage"
          />
          <div style={{ marginLeft: "3rem" }}>
            <button
              onClick={() => imgAction("next-img")}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <i
                style={{ color: "#fff", fontSize: "1rem" }}
                className="fa fa-angle-double-right"
              ></i>
            </button>
          </div>
        </div>
      )}
      <GalleryContainer>
        <section className="portfolio">
          {images.map((image, i) => (
            <img
              src={image}
              key={i}
              alt="Images"
              style={{
                display: "block",
                width: "100%",
                cursor: "pointer",
              }}
              onClick={() => viewImage(image, i)}
            />
          ))}
        </section>
      </GalleryContainer>
      {!fullscreenImage && (
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
      )}
      {!fullscreenImage && <Footer />}
    </>
  );
};

export default Gallery;
