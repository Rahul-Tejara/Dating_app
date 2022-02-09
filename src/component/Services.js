import React from "react";

/**
 * Simple contact page (no navigation inside)
 */

export default function Services() {
  return (
    <section id="services" class="services section-bg">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="feature_heading">
              <span>An Exhaustive List Of</span>
              <h1>Amazing Features</h1>
              <p>
                In our modern day and age dating apps have become an integral
                part of our lives. They allow you to check the profile of
                singles living near you, to chat with them, to meet them and
                maybe to fall in love.
              </p>
            </div>
          </div>
          <div class="col-md-12 col-md-6 col-lg-6">
            <div class="feature_list">
              <ul>
                <li>
                  <div class="service_img">
                    <img src="./assets/img/s1.svg" />
                  </div>
                  <div class="service_content">
                    <h3>Simple to use</h3>
                    <p>In our modern day and age dating apps have become</p>
                  </div>
                </li>
                <li>
                  <div class="service_img">
                    <img src="./assets/img/s2.svg" />
                  </div>
                  <div class="service_content">
                    <h3>Smart Matching</h3>
                    <p>In our modern day and age dating apps have become</p>
                  </div>
                </li>
                <li>
                  <div class="service_img">
                    <img src="./assets/img/s3.svg" />
                  </div>
                  <div class="service_content">
                    <h3>Filter very fast</h3>
                    <p>In our modern day and age dating apps have become</p>
                  </div>
                </li>
                <li>
                  <div class="service_img">
                    <img src="./assets/img/s4.svg" />
                  </div>
                  <div class="service_content">
                    <h3>Cool community</h3>
                    <p>In our modern day and age dating apps have become</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-12 col-md-6 col-lg-6">
            <div class="right_cont">
              <div class="left_img">
                <img src="./assets/img/left-img.png" />
              </div>
              <div class="free_circle">
                <img src="./assets/img/free.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
