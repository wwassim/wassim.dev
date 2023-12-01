"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
const projects = [
  {
    id: 1,
    name: "GYM",
    description: "GYM is a landing page for a gym.",
    image: "/projects/gym.png",
    github: "https://github.com/wassim-stack/GYM-TypeScript",
    link: "https://64c12385a88d290d220ca7e6--harmonious-pie-1d7c01.netlify.app/",
  },
  {
    id: 2,
    name: "Makhmekh",
    description:
      "Makhmekh is a restaurant website using Tailwind CSS & ReactJS.",
    image: "/projects/restau.png",
    github: "https://github.com/wassim-stack/restaurant",
    link: "https://makhmekh.netlify.app/",
  },
  {
    id: 3,
    name: "Cars Hub",
    description: "Cars Hub is a website dedicated to showcasing cars.",
    image: "/projects/Car-Hub.png",
    github: "https://github.com/wassim-stack/cars_showcase",
    link: "https://cars-showcase-gray.vercel.app/",
  },
];
const ProjectsSection = () => {
  const ref = useRef(null);
  const isInViw = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projects.map((project, i) => (
          <motion.li
            key={i}
            variants={cardVariants}
            initial="initial"
            animate={isInViw ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: i * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.name}
              description={project.description}
              imgUrl={project.image}
              code={project.github}
              link={project.link}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
