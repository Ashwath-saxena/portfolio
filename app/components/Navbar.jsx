import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Navbar = ({}) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-30%]"
      >
        {/* <Image src={assets.header_bg_color} alt="" className="w-full" /> */}
      </motion.div>
      <motion.nav
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "" : ""
        } `}
      >
        <motion.a
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          href="#top"
        >
          <Image
            src={assets.logo3}
            alt="logo"
            className="w-15 cursor-pointer mr-14"
          />
        </motion.a>

        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/80 backdrop-blur-md shadow-md"
        >
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a className="font-Ovo hover:bg-blue-200 rounded-full" href="#top">
              home
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <a className="font-Ovo hover:bg-blue-200 rounded-full" href="#about">
              about me
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a className="font-Ovo hover:bg-blue-200 rounded-full" href="#services">
              services
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <a className="font-Ovo hover:bg-blue-200 rounded-full" href="#work">
              my work
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a className="font-Ovo hover:bg-blue-200 rounded-full" onClick={closeMenu} href="#projects">
              my projects
            </a>
          </motion.li>
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex items-center gap-4"
        >
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-grey-500 rounded-full ml-4 font-Ovo hover:bg-blue-200 "
          >
            contact me{" "}
            <Image src={assets.arrow_icon} alt="arrow_icon" className="w-3" />
          </a>

          <motion.button
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="block md:hidden ml-3 cursor-pointer"
            onClick={openMenu}
          >
            <Image src={assets.menu_black} alt="" className="w-6" />
          </motion.button>
        </motion.div>

        {/* Mobile Menu */}

        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <a className="font-Ovo hover:bg-blue-200 rounded-full" onClick={closeMenu} href="#top">
              home
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <a className="font-Ovo hover:bg-blue-200 rounded-full" onClick={closeMenu} href="#about">
              about me
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <a className="font-Ovo hover:bg-blue-200 rounded-full" onClick={closeMenu} href="#services">
              services
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <a className="font-Ovo hover:bg-blue-200 rounded-full" onClick={closeMenu} href="#work">
              my work
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <a className="font-Ovo hover:bg-blue-200 rounded-full" onClick={closeMenu} href="#projects">
              my projects
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <a className="font-Ovo hover:bg-blue-200 rounded-full" onClick={closeMenu} href="#contact">
              contact me 
            </a>
          </motion.li>
        </motion.ul>
      </motion.nav>
    </div>
  );
};

export default Navbar;
