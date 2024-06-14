"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "I can craft engaging websites using Bootstrap,Tailwind Css,JavaScript and React.js.",
    href: "",
  },
  {
    num: "02",
    title: "Ui/Ux Designing",
    description: "I can craft interactive designs that come alive with animation.",
    href: "",
  },
  {
    num: "03",
    title: "Poster Designing",
    description: "I can design eye-catching posters that grab  attention.",
    href: "",
  },
  {
    num: "04",
    title: "FullStack Development",
    description: "I can create dyanamic projects using MERN Stack.",
    href: "",
  },
  
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}{" "}
                  </div>

                  <Link
                    href={service.href}
                    className="w-[78px] h-[78px] rounded-full bg-white
group-hover:bg-accent transition-all duration-500 flex
justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3x1" />
                  </Link>
                </div>
                {/* heading */}
                <h2 className="text-[38px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/* descripetion */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
