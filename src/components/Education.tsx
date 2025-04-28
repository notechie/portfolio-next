"use client";

import React, { useRef } from "react";
import { EDUCATION } from "../constants";
import { motion, useInView } from "framer-motion";
import { Timeline } from "./ui/timeline";

const EducationItem = ({ education, index }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={itemRef}
      className="relative mb-24 flex w-full flex-col lg:flex-row"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
    >

      {/* Right - Details */}
      <div className="relative z-10 w-full lg:w-[58%] md:pl-10">
        <h6 className="mb-2 font-bold" style={{ fontFamily: "sans-serif" }}>
          {education.role} <br />
          <span className="text-xs text-purple-200">{education.company}</span>
        </h6>
        <p
          className="mb-4 text-sm font-medium text-neutral-400 text-justify py-1"
          style={{ fontFamily: "sans-serif" }}
        >
          {education.description}
        </p>
        <div className="flex flex-wrap">
          {education.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="mr-2 mt-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-white"
              style={{ fontFamily: "sans-serif" }}
            >
              {tech}
            </span>
          ))}
        </div>
        
      </div>

    </motion.div>
  );
};

const Education = () => {
  const data = EDUCATION.map((education, index) => ({
    title: education.year,
    content: <EducationItem education={education} key={index} index={index} />
  }));


  return (
    <main>
      <motion.h1
        className="mt-5 my-20 text-center text-4xl md:text-5xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h1>

      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </main>
  );
};

export default Education;
