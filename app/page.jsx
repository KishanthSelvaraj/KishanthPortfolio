"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
// Ensure you have the Chat component imported
import Chat from "@/components/Chat";
import { FiDownload } from "react-icons/fi";
// Other components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { IoChatbox } from "react-icons/io5";
const Home = () => {
  const [showChat, setShowChat] = useState(false);

  // Function to toggle chat visibility
  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <section className="h-full">
          {/* {showChat && <Chat />} */}
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">FullStack Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Kishanth S</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm Full stack developer and the UI/UX Designer{" "}
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/assets/resume/Kishanth.Resume.jpg"
                download={"Resume_image"}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <Button onClick={toggleChat} variant="outline" size="lg" className="uppercase flex items-center gap-2">
                Chat with Me
                <IoChatbox className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-8 items-center text-center xl:me-[80px] ">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
      {/* Conditionally render the Chat component */}
      {showChat && (
        <div className="fixed bottom-4 left-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-50">
          <Chat />
        </div>
      )}
    </section>
  );
};

export default Home;
