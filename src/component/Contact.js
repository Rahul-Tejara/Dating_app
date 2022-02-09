import React from "react";

/**
 * Simple contact page (no navigation inside)
 */

export default function Contact() {
  return (
    <section id="contact" className="contact_footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="footer_logo">
              <img src="./assets/img/logo.png" />
              <p>
                Lorem ipsum dolor sit amet, consectetuer <br />
                adipiscing elit. Aenean commodo ligula eget dolor.
              </p>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="contact_us">
              <h3>CONTACT US</h3>
              <ul>
                <li>
                  <span>
                    <img src="./assets/img/ph.svg" />
                  </span>
                  <a href="javascript:;">1-800-1234-567</a>
                </li>
                <li>
                  <span>
                    <img src="assets/img/email-outline.svg" />
                  </span>
                  <a href="javascript:;">info@demolink.org</a>
                </li>
                <li>
                  <span>
                    <img src="./assets/img/location.svg" />
                  </span>
                  <a href="javascript:;">22 St. Black Road Orlando, PL 34578</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="contact_us follow">
              <h3>FOLLOW US</h3>
              <ul>
                <li>
                  <img src="./assets/img/fb.svg" alt="" />
                </li>
                <li>
                  <img src="./assets/img/insta.svg" />
                </li>
                <li>
                  <img src="./assets/img/twiter.svg" />
                </li>
              </ul>
              <span>
                Phoenixwings © 2022 <a href="javascript:;"> Privacy policy</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
