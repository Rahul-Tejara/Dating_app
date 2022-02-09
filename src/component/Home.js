import React, { useEffect } from "react";
import onLoadExacution from "../../public/assets/js/main";

export default function Home() {
  useEffect(() => {
    onLoadExacution();
  }, []);
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="top_banener_section">
          <div className="top_img">
            <img src="./assets/img/top_img.png" alt="hero_image" />
          </div>
          <div className="find_love">
            <h1>Find the love of your life</h1>
          </div>
          <p>
            Still looking for your significant other? Loven is the place for
            you! Join us now to meet single men and women worldwide
          </p>
          <div className="apps_link">
            <a href="javascript:;" className="apple">
              <img src="./assets/img/apple.png" alt="" />
            </a>
            <a href="javascript:;" className="google">
              <img src="./assets/img/google_play.png" />
            </a>
          </div>
        </div>
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="image"></div>
            </div>
            <div className="swiper-slide">
              <div className="image"></div>
            </div>
            <div className="swiper-slide">
              <div className="image"></div>
            </div>
            <div className="swiper-slide">
              <div className="image"></div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
}
