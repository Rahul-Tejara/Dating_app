import React from "react";

/**
 * Simple contact page (no navigation inside)
 */

export default function Team() {
  return (
    <section id="team">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="testimonials">
              <p>Reviews</p>
              <h1>Testimonials</h1>
            </div>
          </div>
          <div class="col-12">
            <div class="swiper mySwiper1">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="testimonial_container">
                    <div class="user_pic">
                      <img src="./assets/img/userpic.png" />
                    </div>
                    <div class="user_name">Judith Hunter</div>
                    <div class="user_quotes">
                      <p>
                        I would just like to say thank you for your prompt and
                        effective service, for your friendly and professional
                        support staff! I will recommend your expert company to
                        all my friends.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="testimonial_container">
                    <div class="user_pic">
                      <img src="./assets/img/userpic.png" />
                    </div>
                    <div class="user_name">Judith Hunter</div>
                    <div class="user_quotes">
                      <p>
                        I would just like to say thank you for your prompt and
                        effective service, for your friendly and professional
                        support staff! I will recommend your expert company to
                        all my friends.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="testimonial_container">
                    <div class="user_pic">
                      <img src="./assets/img/userpic.png" />
                    </div>
                    <div class="user_name">Judith Hunter</div>
                    <div class="user_quotes">
                      <p>
                        I would just like to say thank you for your prompt and
                        effective service, for your friendly and professional
                        support staff! I will recommend your expert company to
                        all my friends.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
