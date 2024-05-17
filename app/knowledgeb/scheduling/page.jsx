"use client";
import React from "react";
import HeroPageContent from "../components/Hero";
import Cards from "../components/Cards";
import Topics from "./Topics";

function HomePage() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className=""> 
      <div>
        <HeroPageContent
          title="Scheduling"
          subtitle="What would you like to know about scheduling "
          popular=" account creation, reset password, profile image"
          onSubmit={handleFormSubmit}
        />
      </div>

      <div className="p-6">
        <Cards />
        <Topics />
      </div>
    </section>
  );
}

export default HomePage;
