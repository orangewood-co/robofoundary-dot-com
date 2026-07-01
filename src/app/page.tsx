import Hero from "./components/hero";
import WhatWeTeach from "./components/whatWeTeach";
import LearningPath from "./components/learningPath";
import WhyRobofoundary from "./components/whyRobofoundary";
import FeaturedProjects from "./components/featuredProjects";
import Partners from "./components/partners";
import Offerings from "./components/offerings";
import Workshops from "./components/workshops";
import Mentors from "./components/mentors";
import Testimonials from "./components/testimonials";
import Community from "./components/community";
import Footer from "./components/footer";
import PageLayout from "./components/pageLayout";

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <WhatWeTeach />
      <LearningPath />
      <WhyRobofoundary />
      <FeaturedProjects />
      <Partners />
      <Offerings />
      <Workshops />
      <Mentors />
      <Testimonials />
      <Community />
      <Footer />
    </PageLayout>
  );
}
