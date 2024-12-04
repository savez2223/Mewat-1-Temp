import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import DepartmentsSection from '../components/home/DepartmentsSection';
import StatsSection from '../components/home/StatsSection';
import EventsSection from '../components/home/EventsSection';
import AchieversSection from '../components/home/AchieversSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import PartnersSection from '../components/home/PartnersSection';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <DepartmentsSection />
      <StatsSection />
      <EventsSection />
      <AchieversSection />
      <TestimonialsSection />
      <PartnersSection />
    </div>
  );
};

export default HomePage;