import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiSupabase } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

const About = () => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        about me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image2}
            alt="user"
            className="rounded-4xl w-3xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-Ovo">
            hello! i'm ashwath saxena, a passionate full-stack software engineer
            based in bangalore. with a strong foundation in both front-end and
            back-end development, i thrive on creating dynamic and responsive
            web applications that deliver seamless user experiences. my
            expertise spans modern web technologies, allowing me to build robust
            server-side solutions while ensuring an engaging client-side
            interface.
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 hover:shadow-black"
                key={index}
              >
                <Image src={icon} alt="title" className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="my-6 text-gray-700 font-Ovo"
          >
            tools i use :
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-wrap items-center gap-3 sm:gap-5"
          >
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
            >
              <BiLogoPostgresql style={{ fontSize: "2rem" }} />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
            >
              <FaSquareGithub style={{ fontSize: "2rem" }} />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
            >
              <SiMongodb style={{ fontSize: "2rem" }} />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
            >
              <SiMysql style={{ fontSize: "2rem" }} />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
            >
              <FaAws style={{ fontSize: "2rem" }} />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
            >
              <SiSupabase style={{ fontSize: "2rem" }} />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
            >
              <VscAzure style={{ fontSize: "2rem" }} />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
            >
              <RiTailwindCssFill style={{ fontSize: "2rem" }} />
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
            >
              <VscVscode style={{ fontSize: "2rem" }} />
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default About;
