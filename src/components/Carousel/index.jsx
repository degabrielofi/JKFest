import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CarouselContainer, WavesAnimation } from "./style";
import Photo1 from "assets/images/photo1.png";
import Photo2 from "assets/images/photo2.png";
import Photo3 from "assets/images/photo3.png";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [textAnimation, setTextAnimation] = useState("fadeIn"); // Estado para controlar a animação do texto

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
      setTextAnimation("fadeOut");
    },
    afterChange: () => {
      setTextAnimation("fadeIn");
    },
  };

  const slides = [
    {
      image: Photo1,
      text: "Fazemos a decoração da sua festa, do seu jeito!",
    },
    {
      image: Photo2,
      text: "Locamos Mesas, Cadeiras, Tampos, Toalhas etc.",
    },
    {
      image: Photo3,
      text: "Temos: Pula Pula, Crepe, Algodão Doce e Pipoca",
    },
  ];

  return (
    <>
      <CarouselContainer>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide-container">
              <img src={slide.image} alt="JKFest Images" />
              {index === currentSlide && (
                <div className={`text-container ${textAnimation}`}>
                  <h1>{slide.text}</h1>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </CarouselContainer>
      <WavesAnimation>
        <section className="party">
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 590"
            xmlns="http://www.w3.org/2000/svg"
            class="transition duration-300 ease-in-out delay-150"
          >
            <path
              d="M 0,600 L 0,112 C 41.26988217967599,130.08284241531663 82.53976435935198,148.16568483063327 155,138 C 227.46023564064802,127.83431516936672 331.110824742268,89.42010309278349 389,75 C 446.889175257732,60.57989690721651 459.0169366715759,70.15390279823272 520,90 C 580.9830633284241,109.84609720176728 690.8214285714286,139.9642857142857 752,136 C 813.1785714285714,132.0357142857143 825.6973490427098,93.98895434462445 873,84 C 920.3026509572902,74.01104565537555 1002.389175257732,92.0798969072165 1075,100 C 1147.610824742268,107.9201030927835 1210.7459499263623,105.69145802650958 1270,106 C 1329.2540500736377,106.30854197349042 1384.6270250368188,109.15427098674522 1440,112 L 1440,600 L 0,600 Z"
              stroke="none"
              stroke-width="0"
              fill="#0a90cd"
              fill-opacity="0.62"
              class="transition-all duration-300 ease-in-out delay-150 path-0"
            ></path>

            <path
              d="M 0,600 L 0,262 C 50.74521354933725,247.71594256259206 101.4904270986745,233.43188512518412 168,230 C 234.5095729013255,226.56811487481588 316.78350515463916,233.98840206185565 383,258 C 449.21649484536084,282.01159793814435 499.3755522827688,322.61450662739315 551,305 C 602.6244477172312,287.38549337260685 655.7142857142856,211.55357142857144 711,215 C 766.2857142857144,218.44642857142856 823.7673048600884,301.171207658321 894,312 C 964.2326951399116,322.828792341679 1047.2164948453608,261.76159793814435 1106,250 C 1164.7835051546392,238.23840206185565 1199.3667157584684,275.78240058910166 1251,286 C 1302.6332842415316,296.21759941089834 1371.3166421207657,279.1087997054492 1440,262 L 1440,600 L 0,600 Z"
              stroke="none"
              stroke-width="0"
              fill="#0a90cd"
              fill-opacity="0.73"
              class="transition-all duration-300 ease-in-out delay-150 path-1"
            ></path>

            <path
              d="M 0,600 L 0,412 C 69.39985272459501,421.31277614138435 138.79970544919001,430.62555228276875 191,412 C 243.20029455080999,393.37444771723125 278.20103092783495,346.8105670103093 338,357 C 397.79896907216505,367.1894329896907 482.39617083946985,434.1321796759941 547,460 C 611.6038291605302,485.8678203240059 656.2142857142858,470.66071428571433 710,439 C 763.7857142857142,407.33928571428567 826.7466863033874,359.2249631811487 891,359 C 955.2533136966126,358.7750368188513 1020.7989690721647,406.4394329896908 1075,423 C 1129.2010309278353,439.5605670103092 1172.057437407953,425.01730486008836 1231,418 C 1289.942562592047,410.98269513991164 1364.9712812960233,411.4913475699558 1440,412 L 1440,600 L 0,600 Z"
              stroke="none"
              stroke-width="0"
              fill="#0a90cd"
              fill-opacity="1"
              class="transition-all duration-300 ease-in-out delay-150 path-2"
            ></path>
          </svg>
        </section>
      </WavesAnimation>
    </>
  );
};

export default Carousel;
