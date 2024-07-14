"use client";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSlideBtns";
const projects = [
  {
    num: "01",
    category: "frontend",
    title: "CaterServ Website",
    description:
      "This is a frondend project which is duplication of real CaterServ website",
    stack: [{ name: "Html" }, { name: "Css" }],
    image: "/assets/assets/work/thumb1.jpg",
    live: "https://caterserv.vercel.app/",
    github: "https://github.com/KishanthSelvaraj/Caterserv",
  },
  {
    num: "02",
    category: "frontend",
    title: "Flames Game",
    description: "This is the flames game using html,css and js.",
    stack: [{ name: "Html" }, { name: "Css" }, { name: "Js" }],
    image: "/assets/assets/work/thumb7.jpg",
    live: "https://flames-game-chi.vercel.app/",
    github: "https://github.com/KishanthSelvaraj/FLAMES-GAME",
  },
  {
    num: "03",
    category: "frontend",
    title: "Mobile Shop Website",
    description:
      "This is a static project for mobile shop also with simple dynamic functions.",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "Js" },
      { name: "Node" },
    ],

    title: "Mobile Shop Website",
    description:
      "This is a static project for mobile shop also with simple dynamic functions.",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "Js" },
      { name: "Node.js" },
    ],
    image: "/assets/assets/work/thumb2.jpg",
    live: "https://mobile-showroom.vercel.app/",
    github: "/restricted",
  },
  {
    num: "04",
    category: "frontend",
    title: "Static Website",
    description: "This is the static websites with some animations using gsap.",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "Js" },
      { name: "React.js" },
    ],
    image: "/assets/assets/work/thumb3.jpg",
    live: "https://ils-jade.vercel.app/",
    github: "/restricted",
  },
  {
    num: "05",
    category: "frontend",
    title: "Interior Design Website",
    description:
      "This is a static project for interior design shop with simple dynamic functions.",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "Js" },
      { name: "React.js" },
      { name: "Node.js" },
    ],
    image: "/assets/assets/work/thumb4.jpg",
    live: "https://dream-interior-gold.vercel.app/",
    github: "/restricted",
  },
  {
    num: "06",
    category: "frontend",
    title: "Photography Website",
    description:
      "This is a static project for photography also with some animations using gsap.",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "Js" },
      { name: "Next.js" },
      { name: "Gsap" },
    ],
    image: "/assets/assets/work/thumb8.jpg",
    live: "https://photography-rose-five.vercel.app/",
    github: "/restricted",
  },
  {
    num: "07",
    category: "Backend",
    title: "Crud-Operation",
    description: "This is the dynamic Crud operarion using MERN Stack.",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "Js" },
     { name: "MERN" },
    ],
    image: "/assets/assets/work/thumb5.jpg",
    live: "",
    github: "https://github.com/KishanthSelvaraj/CRUD-MERN",
  },
  {
    num: "08",
    category: "Backend",
    title: "Login-Authenticaiton",
    description:
      "This is the Login Authenticaiton with JWT token using MERN Stack",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "Js" },
      { name: "MERN" },
    ],
    image: "/assets/assets/work/thumb6.jpg",
    live: "",
    github: "https://github.com/KishanthSelvaraj/USER_LOGIN",
  },
  {
    num: "09",
    category: "Backend",
    title: "Furniture Website",
    description:
      "This is the fullstack furniture website using sanity cms and Next.js",
    stack: [{ name: "Tailwind" }, { name: "Next.js" }, { name: "Sanity CMS" }],
    image: "/assets/assets/work/thumb9.jpg",
    live: "https://nooks-tan.vercel.app/",
    github: "/restricted",
  },
 {
    num: "10",
    category: "Backend",
    title: "Jamboard Website",
    description:
      "This is the fullstack Jamboard website using MERN Stack with Socket.io",
    stack: [
      { name: "Tailwind" },
 { name: "MERN" },
      { name: "Socket.io" },
    ],
    image: "/assets/assets/work/thumb11.png",
    live: "",
    github: "https://github.com/KishanthSelvaraj/Jamboard",
  },
  {
    num: "11",
    category: "Backend",
    title: "Ecommerce Website",
    description:
      "This is the fullstack ecommerce website using Next.js, Sanity CMS, Shadcn UI with Stripe payment integration",
    stack: [
      { name: "Tailwind" },
      { name: "Next.js" },
      { name: "Sanity CMS" },
      { name: "Stripe" },
    ],
    image: "/assets/assets/work/thumb10.jpg",
    live: "https://ecommerce-bdx.vercel.app/",
    github: "https://github.com/KishanthSelvaraj/ECOMMERCE",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leating-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project catogory */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-md text-accent">
                      {item.name}
                      {/* remove the last commo */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* liveproject */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3x1 group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3x1 group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt="project images"
                        ></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* sliderbutton */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
