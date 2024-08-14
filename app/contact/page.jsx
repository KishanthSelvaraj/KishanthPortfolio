"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 6369729001",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "kishanthnkl@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "4/131E,Maiyl vaganam street, Annanagar,Namakkal-(637002)",
  },
];

const Contact = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
    service: "", // Add a new field for service
  });

  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleServiceChange = (value) => {
    setUser((prevUser) => ({
      ...prevUser,
      service: value,
    }));
  };

  const sendwhatsapp = () => {
    const phonenumber = "+916369729001";
    const url = `https://wa.me/${phonenumber}?text=
      Name: ${user.firstname} ${user.lastname}%0a
      Email: ${user.email}%0a
      Phone: ${user.phone}%0a
      Service: ${user.service}%0a
      Message: ${user.message}%0a%0a
      Thank you!!!`;

    window.open(url, '_blank').focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      console.log("Form data submitted:", user);
      sendwhatsapp(); // Redirect to WhatsApp
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setSubmitting(false);
    }
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
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Contact me for more information; let us work together!
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  id="firstname"
                  name="firstname"
                  type="text"
                  placeholder="Firstname"
                  value={user.firstname}
                  onChange={handleInputChange}
                />
                <Input
                  id="lastname"
                  name="lastname"
                  type="text"
                  placeholder="Lastname"
                  value={user.lastname}
                  onChange={handleInputChange}
                />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={user.email}
                  onChange={handleInputChange}
                />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={user.phone}
                  onChange={handleInputChange}
                />
              </div>
              <Select onValueChange={handleServiceChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Fullstack Development">Fullstack Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                id="message"
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
                value={user.message}
                onChange={handleInputChange}
              />
              <Button type="submit" size="md" className="max-w-40" disabled={submitting}>
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
