import React, { useState } from "react";
import HeroSection from "../components/heroSection";
import InfoSection from "../components/infoSection";
import { Navbar } from "./../components/navbar";
import { Sidebar } from "./../components/sidebar";

import Image1 from "../images/design-notes.svg";
import Image2 from "../images/space.svg";
import InfoSectionLight from "../components/infoSectionLight";
import Services from "../components/services";
import Footer from "../components/footer";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection
        image={Image1}
        id="about"
        subtitle="About us"
        title="Development solutions"
        text="Want to adopt blockchain for your enterprise? We provide companies and startups with industry-specific and bespoke blockchain development services including Ethereum, Binance Chain, Polygon, Solana, etc, to help accelerate integration and deployment, as well as Web 2.0 solutions to connect you platforms and web applications to the blockchain."
        btnText="Get a quote"
      />
      <InfoSectionLight
        image={Image2}
        id="discover"
        subtitle="What we do"
        title="Blockchain Development Company"
        text="As a Blockchain Development company our team can help integrating blockchain into your business. From cryptocurrency development services to smart contract development and wallet development, we can help you with the development of enterprise-ready blockchain applications and elevate your business to new heights. "
        btnText="Get a quote"
      />
      <Services />
      <InfoSectionLight
        image={Image1}
        id="#"
        subtitle="Have a quote"
        title="And let's find a solution for your company"
        text=""
        btnText="Contact Us"
      />
      <Footer />
    </>
  );
};
