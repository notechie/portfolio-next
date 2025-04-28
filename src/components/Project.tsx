"use client";
import React, { useRef } from "react";
import { PROJECTS } from "../constants";
import { motion, useInView } from "framer-motion";
import Image from "next/image"

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      x: index % 2 === 0 ? -30 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: index * 0.15,
      },
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  const techVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
    hover: {
      scale: 1.1,
      backgroundColor: "white",
      color: "black",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800"
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      style={{
        maxWidth: "480px", // Increased from 440px
        margin: "0 auto",
        transform: "translateZ(0)",
      }}
    >
      {/* Image Block */}
      <div className="w-full relative group overflow-hidden rounded-t-xl">
        <Image
          src={project.image}
          alt={project.title}
          className="object-cover w-full h-64 transition-all duration-300 group-hover:scale-105" // Increased height
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-90 transition-all duration-300">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border border-white px-4 py-2 rounded-md font-medium hover:bg-white hover:text-black transition"
          >
            View GitHub
          </a>
        </div>
      </div>

      {/* Text Block */}
      <div className="p-6">
        {" "}
        {/* Increased padding */}
        <h6 className="mb-3 text-xl font-semibold text-white">
          {" "}
          {/* Larger text and formal font */}
          {project.title}
        </h6>
        <p className="text-neutral-400 text-base leading-relaxed mb-4" style={{ fontFamily: "inter" }}>
          {" "}
          {/* Larger text and clean font */}
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <motion.span
              key={i}
              className="inline-block bg-neutral-800 font-bold text-neutral-300 text-sm px-3 py-1.5 rounded-xl cursor-pointer" // Larger text and padding
              variants={techVariants}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover="hover"
              style={{ fontFamily: "Playfair Display" }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Project = () => {
  const headingRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="projects"
      className="pb-20"
      ref={containerRef}
    >
      <motion.h1
        ref={headingRef}
        className="my-16 text-center text-4xl md:text-5xl font-bold text-white font-serif" // Formal font
        variants={headingVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Projects
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-16"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {PROJECTS.map((project, index) => (
          <ProjectCard project={project} index={index} key={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default Project;
