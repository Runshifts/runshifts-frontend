'use client'
import React from 'react';
import HeroPageContent from '../knowledgeb/components/Hero';

function HomePage() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div>
      <HeroPageContent
        title="Knowledge Base"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt arcu eget quam malesuada, sed placerat nisl feugiat."
        popular=" account creation, reset password, profile image"
        onSubmit={handleFormSubmit}
      />
    </div>
  );
}

export default HomePage;
