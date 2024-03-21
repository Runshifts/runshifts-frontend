"use client";
import React from "react";
import HeroPageContent from "./components/Hero";
import Cards from "./components/Cards";
import Employer from "./components/Employer";
import Employee from "./components/Employee";
import Basic from "./components/Basic";

function HomePage() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="">
      <div>
        <HeroPageContent
          title="Knowledge Base"
          subtitle="All the resources you need to get the most out of
        our product, quickly and effectively!"
          popular=" account creation, reset password, profile image"
          onSubmit={handleFormSubmit}
        />
      </div>

      <div className="p-6">
        <Cards />
        <Basic />
        <Employer />
        <Employee />
      </div>
    </section>
  );
}

export default HomePage;
