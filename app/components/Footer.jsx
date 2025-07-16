import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mt-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <Image src={assets.logo3} alt="" className="w-36 mx-auto mb-2" />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-max flex items-center gap-2 mx-auto"
        >
          <Image src={assets.mail_icon} alt="" className="w-6" />
          work.ashwathsaxena.as@gmail.com
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6"
      >
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          &copy; 2025 ashwath saxena. *almost* all rights reserved.{" "}
        </motion.p>
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center gap-10 justify-center mt-4 sm:mt-0"
        >
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <a target="_blank" href="https://github.com/Ashwath-saxena">
              github
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ashwath-saxena/"
            >
              linkedin
            </a>
          </motion.li>
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
