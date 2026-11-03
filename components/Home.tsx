"use client";

import { useRef } from "react";
import Hero from "./Hero";
import Projects from "./Projects";
import { About, BigQuote, Pricing, Services, Trusted } from "./Sections";
import { Articles, Faq, Footer, Testimonials } from "./Lower";
import Chrome from "./Chrome";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  return (
    <Chrome>
      <Hero ref={heroRef} />
      <main>
        <Projects heroRef={heroRef} />
        <BigQuote />
        <Services />
        <About />
        <Pricing />
        <Trusted />
        <Testimonials />
        <Faq />
        <Articles />
      </main>
      <Footer />
    </Chrome>
  );
}
