import React, { Fragment } from "react";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Review from "./component/Team";
import Faq from "./component/Faq";
import Services from "./component/Services";
import { Element } from "react-scroll";

export default function Body() {
  return (
    <Fragment>
      <Element id="/" name="home">
        <Home />
      </Element>
      <Element id="/about" name="about">
        <About />
      </Element>

      <Element id="/services" name="services">
        <Services />
      </Element>
      <Element id="/faq" name="faq">
        <Faq />
      </Element>
      <Element id="/team" name="team">
        <Review />
      </Element>
      <Element id="/contact" name="contact">
        <Contact />
      </Element>
    </Fragment>
  );
}
