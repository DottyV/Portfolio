import { motion } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const HoverLinks = () => {
    return (
      <section className="bg-neutral-950 p-4 md:p-8">
        <div className="mx-auto max-w-5xl">
          <Link
            heading="Project 1"
            subheading="Learn what we do here"
            imgSrc="../public/metalBird.png"
            href="#"
          />
          <Link
            heading="Project 2"
            subheading="We work with great people"
            imgSrc="../public/metalBird.png"
            href="#"
          />
          <Link
            heading="Project 3"
            subheading="Our work speaks for itself"
            imgSrc="../public/metalBird.png"
            href="#"
          />
          <Link
            heading="Project 4"
            subheading="We want cool people"
            imgSrc="../public/metalBird.png"
            href="#"
          />
          <Link
            heading="Project 5"
            subheading="Incase you're bored"
            imgSrc="../public/metalBird.png"
            href="#"
          />
        </div>
  
      </section>
    )
  };
  
  const Link = ({heading, subheading, imgSrc, href}) => {
    return (
    <a href={href} className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"> 
      <div>
        <span>{heading}</span>
        <span>{subheading}</span>
      </div>
      {/* Add Image */}
  
      <div>
        <FiArrowRight/>
      </div>
    </a>
    );
  };