import React from 'react';
import { About } from '../sections/about/About';
import { Skills } from '../sections/skills/Skills';
import { Experience } from '../sections/experience/Experience';
import { Projects } from '../sections/projects/Projects';
import { Awards } from '../sections/awards/Awards';
import { Recommendations } from '../sections/recommendations/Recommendations';

export const Home: React.FC = () => {
  return (
    <>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Awards />
      <Recommendations />
    </>
  );
};
