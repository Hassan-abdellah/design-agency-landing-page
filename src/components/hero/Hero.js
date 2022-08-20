import React from "react";
import "./hero.css";
import HeroImage from "./hero-image.svg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="wrapper hero-wrapper">
      <div className="hero">
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{
            duration: "1.2",
            easings: "linear",
            type: "spring",
            stiffness: "100",
          }}
          className="hero-content"
        >
          <h1>
            We Make Your Business <span>Stand Out</span>
          </h1>
          <p>For All Tastes</p>
          <button className="btn">
            <span>Order A Design</span>
          </button>
        </motion.div>
        <div className="image">
          <img src={HeroImage} alt="web designer" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
