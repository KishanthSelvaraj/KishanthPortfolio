"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs , SiMongodb ,SiExpress   } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "I'm currently pursuing B.Tech Information Technology in KSR College of Engineering.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Kishanth Selvaraj",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 6369729001",
    },
    {
      fieldName: "Experience",
      fieldValue: "6 Months",
    },
    {
      fieldName: "Email",
      fieldValue: "ceitkishanth25@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
  
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "Tamil,English",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have done my 6 months of Internship in Axexa technology Solution.",
  items: [
    {
      company: "Axexa Technology Solution",
      position: "FullStack Developer(Intern)",
      duration: "6 Months",
    },
  ],
};
// education data
const education = {
  icon: "/assets/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I'm currently pursuing B.Tech Information Technology final year in KSR College of Engineering.",
  items: [
    {
      institution: "86%",
      position: "Bharathi Vidhyalaya Matric Hr Sec School.",
      duration: "2018 - 2019(SSLC)",
    },
    {
      institution: "85%",
      position: "Bharathi Vidhyalaya Higher Sec School.",
      duration: "2020 - 2021(HSC)",
    },
    {
      institution: "8Cgpa(current)",
      position: "KSR College of Engineering",
      duration: "2021-current(B.Tech IT)",
    },
    
  ],
};
//skills data
const skills = {
  title:"My Skills",
  description:
    "I have skills for develop interactive websites and dynamic projects.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript ",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },

    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
      {
      icon: <SiExpress  />,
      name: "Express.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap 5",
    },
    {
      icon: <SiMongodb  />,
      name: "Mongodb",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

import { ScrollArea } from "@/components/ui/scroll-area";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>

            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          {/* contant */}
          <div className="min-h-[70vh] w-full">
            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className=" text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[158px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
           
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <TabsContent value="experience" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
            </TabsContent>
             {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul
                  className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0"
                >
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;
