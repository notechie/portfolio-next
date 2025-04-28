"use client";
import React, { useRef } from "react";
import { ABOUT_TEXT1, ABOUT_TEXT2, ABOUT_TEXT3 } from "../constants/index";
import DP from "@/assets/about.jpg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={sectionRef}
      className="border-b border-neutral-900 pb-4"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Title */}
      <motion.h1
        className="mt-10 my-12 text-center text-4xl md:text-5xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        About Me
      </motion.h1>

      <div className="flex flex-col-reverse lg:flex-row justify-center items-center px-4 lg:px-0 gap-4">
        {/* LEFT IMAGE BLOCK */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center">
            <div className="animated-gradient rounded-br-full bg-gradient-to-b justify-center items-center flex">
              <Image
                className="object-cover mx-aut"
                style={{
                  width: "20.5em",
                  height: "28em",
                  position: "relative",
                }}
                src={DP}
                alt="Hero Image"
              />
            </div>
          </div>
        </motion.div>

        {/* RIGHT TEXT BLOCK */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="flex lg:justify-start">
            <motion.p
              className="max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              {ABOUT_TEXT1}
              <br />
              <br />
              {ABOUT_TEXT2}
              <br />
              <br />
              {ABOUT_TEXT3}

              <motion.div
                className="mt-10 flex items-center gap-10 lg:gap-4 text-3xl justify-center lg:justify-start"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.2 },
                  },
                }}
              >
                <motion.a
                  href="https://www.instagram.com/i.__bhuban?igsh=OXk5dGQ4NGVncXkw"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                >
                  <FaInstagram />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/bhuban-mahapatra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                >
                  <FaLinkedin />
                </motion.a>
                <motion.a
                  href="https://github.com/notechie"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                >
                  <FaGithub />
                </motion.a>
              </motion.div>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
