import React, { useState } from "react"
import Hero from "./components/Hero"
import WorkExamples from "./components/WorkExamples"
import FeatureSection from "./components/FeatureSection"
import AboutMe from "./components/AboutMe"
import WhyUpdate from "./components/WhyUpdate"
import ProcessSection from "./components/ProcessSection"
import ResultSection from "./components/ResultSection"
import ServicesSection from "./components/ServicesSection"
import ContactForm from "./components/ContactForm"
import BeforeAfterCarousel from "./components/BeforeAfterCarousel"
export function App() {
  const [isOpen, setIsOpen] = useState(false)
  const menuItems = [
    { label: "Зачем", ariaLabel: "Why", link: "/#why" },
    { label: "Обо мне", ariaLabel: "About us", link: "/#about" },
    { label: "Услуги", ariaLabel: "Services", link: "/#services" },
    { label: "Контакты", ariaLabel: "Contacts", link: "/#contacts" },
  ]

  return (
    <>
      <div className="fixed top-4 left-4 z-50">
        <img
          src="/logo.png"
          alt="logo"
          className="h-10 w-auto object-contain md:h-12 lg:h-14"
        />
      </div>
      <Hero />
      <WhyUpdate />
      <FeatureSection />
      <AboutMe />
      <WorkExamples />
      <BeforeAfterCarousel />
      <ProcessSection />
      <ResultSection />
      <ServicesSection />
      <ContactForm />
    </>
  )
}
