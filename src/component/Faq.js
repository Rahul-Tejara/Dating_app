import React, { Fragment } from "react";

/**
 * Simple contact page (no navigation inside)
 */

export default function Faq() {
  return (
    <Fragment>
      <section id="faq">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-md-6 col-lg-6">
              <div class="app_ss">
                <img src="./assets/img/screenshots.png" />
              </div>
            </div>
            <div class="col-md-12 col-md-6 col-lg-6">
              <div class="faq_content">
                <p>FAQ</p>
                <h3>
                  Frequently Asked
                  <br />
                  Question
                </h3>
                <div class="faq_tab">
                  <div
                    class="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingOne">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                        >
                          How do I verify my profile?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum sociis natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus. Donec quam felis.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingTwo">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                        >
                          How can I match up with someone?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingTwo"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum sociis natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus. Donec quam felis.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="flush-headingThree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                        >
                          How can I have premium account?
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="flush-headingThree"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div class="accordion-body">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum sociis natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus. Donec quam felis.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="bacground_blk">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-md-6 col-lg-6">
              <div class="people_img">
                <img src="./assets/img/image1.png" />
              </div>
            </div>
            <div class="col-md-12 col-md-6 col-lg-6">
              <div class="people_content">
                <h1>
                  Uniting people
                  <br />
                  with common interests
                </h1>
              </div>
              <div class="join_us">
                <button>Join US</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
