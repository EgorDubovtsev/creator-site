import { Button } from "@workspace/ui/components/button"
import React, { useState } from "react"
import Hero from "./components/Hero"
import TextType from "../../../src/component/TextType"
import CardSwap, { Card } from "../../../src/component/CardSwap"
import WorkExamples from "./components/WorkExamples"
import CurvedLoop from "../../../src/component/CurvedLoop"
import FeatureSection from "./components/FeatureSection"
import AboutMe from "./components/AboutMe"
import WhyUpdate from "./components/WhyUpdate"
import ProcessSection from "./components/ProcessSection"
import ResultSection from "./components/ResultSection"
import ServicesSection from "./components/ServicesSection"
import ContactForm from "./components/ContactForm"
import StaggeredMenu from "../../../src/component/StaggeredMenu"
export function App() {
  const [isOpen, setIsOpen] = useState(false)
  const menuItems = [
    { label: "Зачем", ariaLabel: "Why", link: "/#why" },
    { label: "О нас", ariaLabel: "About us", link: "/#about" },
    { label: "Услуги", ariaLabel: "Services", link: "/#services" },
    { label: "Контакты", ariaLabel: "Contacts", link: "/#contacts" },
  ]

  return (
    <>
      <div className="pointer-events-none fixed top-0 left-0 z-[9999] h-screen w-full">
        <StaggeredMenu
          position="left"
          items={menuItems}
          displayItemNumbering={true}
          menuButtonColor="#ffffff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={["#020617", "#f97316"]}
          accentColor="#f97316"
          onMenuOpen={() => setIsOpen(true)}
          onMenuClose={() => setIsOpen(false)}
        />
      </div>
      <Hero />
      <WhyUpdate />
      <FeatureSection />
      <AboutMe />
      <WorkExamples />
      <ProcessSection />
      <ResultSection />
      <ServicesSection />
      <ContactForm />
    </>
  )
}
